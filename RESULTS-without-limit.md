# Pg Pool vs Pg Client
Just a simple comparison to see which one performs better.

# 8 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.31s   232.34ms   1.60s    81.13%
    Req/Sec     0.11      0.37     2.00     90.91%
  Latency Distribution
     50%    1.31s 
     75%    1.50s 
     90%    1.52s 
     99%    1.60s 
  55 requests in 10.01s, 45.59MB read
  Socket errors: connect 0, read 0, write 0, timeout 2
Requests/sec:      5.49
Transfer/sec:      4.55MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.24s   184.93ms   1.60s    91.53%
    Req/Sec     0.03      0.18     1.00     96.61%
  Latency Distribution
     50%    1.29s 
     75%    1.30s 
     90%    1.38s 
     99%    1.60s 
  59 requests in 10.01s, 48.90MB read
  Socket errors: connect 0, read 18409, write 0, timeout 0
Requests/sec:      5.89
Transfer/sec:      4.88MB
```

# 64 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us    -nan%
    Req/Sec     0.18      0.50     2.00     86.36%
  Latency Distribution
     50%    0.00us
     75%    0.00us
     90%    0.00us
     99%    0.00us
  30 requests in 10.02s, 32.13MB read
  Socket errors: connect 0, read 23771, write 0, timeout 30
Requests/sec:      3.00
Transfer/sec:      3.21MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.24s   406.87ms   1.81s    75.00%
    Req/Sec     0.93      1.80    10.00     89.09%
  Latency Distribution
     50%    1.30s 
     75%    1.59s 
     90%    1.81s 
     99%    1.81s 
  56 requests in 10.02s, 46.41MB read
  Socket errors: connect 0, read 21825, write 0, timeout 48
Requests/sec:      5.59
Transfer/sec:      4.63MB
```

# 128 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 128 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.66s   284.69ms   2.00s    63.64%
    Req/Sec     1.62      3.77    20.00     91.11%
  Latency Distribution
     50%    1.70s 
     75%    1.88s 
     90%    1.99s 
     99%    2.00s 
  47 requests in 10.01s, 40.23MB read
  Socket errors: connect 0, read 11306, write 0, timeout 36
Requests/sec:      4.69
Transfer/sec:      4.02MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 128 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.21s   480.24ms   1.90s    50.00%
    Req/Sec     1.31      2.23    10.00     88.89%
  Latency Distribution
     50%    1.20s 
     75%    1.71s 
     90%    1.90s 
     99%    1.90s 
  54 requests in 10.01s, 44.76MB read
  Socket errors: connect 0, read 17847, write 0, timeout 46
Requests/sec:      5.39
Transfer/sec:      4.47MB
```

# 256 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.82s   170.15ms   1.99s    60.00%
    Req/Sec     1.31      2.61    10.00     87.50%
  Latency Distribution
     50%    1.79s 
     75%    1.98s 
     90%    1.99s 
     99%    1.99s 
  39 requests in 10.04s, 35.61MB read
  Socket errors: connect 0, read 19712, write 0, timeout 34
Requests/sec:      3.88
Transfer/sec:      3.55MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.17s   517.54ms   1.98s    66.67%
    Req/Sec     1.94      2.71    10.00     83.82%
  Latency Distribution
     50%    1.21s 
     75%    1.68s 
     90%    1.80s 
     99%    1.98s 
  68 requests in 10.04s, 56.36MB read
  Socket errors: connect 0, read 5390, write 0, timeout 56
Requests/sec:      6.77
Transfer/sec:      5.61MB
```

# 512 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us    -nan%
    Req/Sec     1.24      4.39    20.00     92.00%
  Latency Distribution
     50%    0.00us
     75%    0.00us
     90%    0.00us
     99%    0.00us
  31 requests in 10.09s, 29.29MB read
  Socket errors: connect 0, read 245, write 0, timeout 31
Requests/sec:      3.07
Transfer/sec:      2.90MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.22s   474.67ms   2.00s    66.67%
    Req/Sec     1.37      1.94    10.00     88.14%
  Latency Distribution
     50%    1.31s 
     75%    1.50s 
     90%    2.00s 
     99%    2.00s 
  59 requests in 10.06s, 48.90MB read
  Socket errors: connect 0, read 10746, write 0, timeout 50
Requests/sec:      5.86
Transfer/sec:      4.86MB
```