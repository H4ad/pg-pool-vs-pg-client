import { createServer } from 'node:http';
import pg from 'pg';

const { Client, Pool } = pg;

const defaultJsonHeaders = {
  'Content-Type': 'application/json',
};

const client = process.env.POOL_SIZE ?
  new Pool({
    connectionString: process.env.DATABASE_URL ?? 'postgres://rinha:password@localhost:5432/dev',
    max: Number(process.env.POOL_SIZE),
    statement_timeout: 0,
    query_timeout: 0,
    connectionTimeoutMillis: 0,
    keepAlive: true,
  }) :
  new Client({
    connectionString: process.env.DATABASE_URL ?? 'postgres://rinha:password@localhost:5432/dev',
    statement_timeout: 0,
    query_timeout: 0,
    connectionTimeoutMillis: 0,
    keepAlive: true,
  });

if (!process.env.POOL_SIZE)
  client.connect();

client.on('error', (error) => {
  console.error(error);
});

const notFoundHandler = (res) => {
  res.statusCode = 404;
  res.end();
};

const unexpectedError = (res) => {
  res.statusCode = 500;
  res.end();
};

const getTransactions = (id, req, res) => {
  if (req.method !== 'GET') {
    return notFoundHandler(res);
  }

  client.query(`SELECT value, type, description, created_at FROM transactions WHERE person_id = $1 ORDER BY created_at DESC LIMIT 10;`, [id], (err2, transactions) => {
    if (err2) {
      console.error('Error selecting data of transactions', err2);
      return unexpectedError(res);
    }

    res.writeHead(200, defaultJsonHeaders);
    res.end(JSON.stringify({
      last_transactions: transactions.rows,
    }));
  });
}

const server = createServer((req, res) => {
  if (!req.url) {
    return notFoundHandler(res);
  }

  if (req.url === '/health') {
    res.writeHead(204, defaultJsonHeaders);
    res.end();
    return;
  }

  const [_, client, id, action] = req.url?.split('/');

  if (client !== 'clients') {
    return notFoundHandler(res);
  }

  const idInt = +id;

  if (Number.isNaN(idInt)) {
    return notFoundHandler(res);
  }

  switch (action) {
    case 'transactions': {
      return getTransactions(idInt, req, res);
    }

    default:
      return notFoundHandler(res);
  }
});

server.keepAliveTimeout = 60 * 1000;
server.headersTimeout = 60 * 1000;
server.maxRequestsPerSocket = 0;
server.listen(3000, 5_000);

console.log('Server running at http://localhost:3000/');
