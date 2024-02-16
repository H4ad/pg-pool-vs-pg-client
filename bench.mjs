import autocannon from 'autocannon'


const resultWithPool = await autocannon({
  url: 'http://localhost:3000/clients/1/transactions',
  connections: 124,
  pipelining: 1,
  duration: 20,
});

console.log('API With Pool');
autocannon.printResult(resultWithPool)

const resultWithoutPool = await autocannon({
  url: 'http://localhost:3000/clients/1/transactions',
  connections: 124,
  pipelining: 1,
  duration: 20
});

console.log('API Without Pool');
autocannon.printResult(resultWithoutPool)

autocannon.aggregateResult()