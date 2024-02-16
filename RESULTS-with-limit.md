# Pg Pool vs Pg Client
Just a simple comparison to see which one performs better.

# 8 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    22.33ms   32.74ms 306.49ms   83.38%
    Req/Sec   168.33     84.16   353.00     57.93%
  Latency Distribution
     50%    1.96ms
     75%   40.46ms
     90%   66.85ms
     99%  127.42ms
  13137 requests in 10.01s, 13.03MB read
Requests/sec:   1312.69
Transfer/sec:      1.30MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.47ms   24.81ms  94.85ms   79.39%
    Req/Sec   148.47     63.66   252.00     57.01%
  Latency Distribution
     50%    2.46ms
     75%   36.90ms
     90%   61.63ms
     99%   83.04ms
  11535 requests in 10.01s, 11.44MB read
  Socket errors: connect 0, read 17381, write 0, timeout 0
Requests/sec:   1152.29
Transfer/sec:      1.14MB
```

# 64 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    66.84ms   79.98ms 692.76ms   94.14%
    Req/Sec   152.80     68.17   303.00     56.25%
  Latency Distribution
     50%   80.17ms
     75%   91.61ms
     90%  103.55ms
     99%  473.70ms
  11480 requests in 10.01s, 11.39MB read
  Socket errors: connect 0, read 13416, write 0, timeout 0
Requests/sec:   1147.02
Transfer/sec:      1.14MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    54.84ms   40.15ms 290.70ms   76.50%
    Req/Sec   150.58     50.87   252.00     65.08%
  Latency Distribution
     50%   75.06ms
     75%   85.75ms
     90%   96.54ms
     99%  183.38ms
  11674 requests in 10.02s, 11.58MB read
  Socket errors: connect 0, read 21283, write 0, timeout 0
Requests/sec:   1165.11
Transfer/sec:      1.16MB
```

# 128 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 128 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   165.95ms  215.88ms   2.00s    94.59%
    Req/Sec   119.07     64.08   303.00     63.33%
  Latency Distribution
     50%  102.53ms
     75%  184.19ms
     90%  292.38ms
     99%    1.37s 
  8800 requests in 10.01s, 8.73MB read
  Socket errors: connect 0, read 16550, write 0, timeout 47
Requests/sec:    879.29
Transfer/sec:      0.87MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 128 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   130.39ms   69.16ms 608.37ms   81.57%
    Req/Sec   126.50     55.91   280.00     65.07%
  Latency Distribution
     50%  103.88ms
     75%  174.66ms
     90%  204.89ms
     99%  344.17ms
  9786 requests in 10.01s, 9.71MB read
  Socket errors: connect 0, read 25738, write 0, timeout 0
Requests/sec:    977.60
Transfer/sec:      0.97MB
```

# 256 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   248.96ms  185.90ms   2.00s    92.84%
    Req/Sec   136.69     69.30   290.00     63.22%
  Latency Distribution
     50%  203.56ms
     75%  293.98ms
     90%  398.61ms
     99%    1.20s 
  10209 requests in 10.05s, 10.13MB read
  Socket errors: connect 0, read 6, write 0, timeout 74
Requests/sec:   1015.99
Transfer/sec:      1.01MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 256 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   283.62ms  127.87ms   1.10s    84.40%
    Req/Sec   113.94     52.03   240.00     60.38%
  Latency Distribution
     50%  269.75ms
     75%  308.52ms
     90%  412.72ms
     99%  803.27ms
  8882 requests in 10.03s, 8.81MB read
  Socket errors: connect 0, read 16685, write 0, timeout 0
Requests/sec:    885.15
Transfer/sec:      0.88MB
```

# 512 connections

## With Pool

```Running 10s test @ http://localhost:3000/clients/1/transactions
  8 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   366.72ms  137.16ms   2.00s    87.80%
    Req/Sec   132.72     67.60   310.00     64.09%
  Latency Distribution
     50%  311.79ms
     75%  402.48ms
     90%  496.59ms
     99%  894.26ms
  9805 requests in 10.09s, 9.72MB read
  Socket errors: connect 0, read 7947, write 0, timeout 360
Requests/sec:    971.91
Transfer/sec:      0.96MB
```

## Without Pool

```Running 10s test @ http://localhost:3001/clients/1/transactions
  8 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   539.89ms  258.78ms   1.98s    85.70%
    Req/Sec   129.98     74.37   393.00     70.19%
  Latency Distribution
     50%  490.50ms
     75%  600.32ms
     90%  802.73ms
     99%    1.68s 
  9387 requests in 10.10s, 9.31MB read
  Socket errors: connect 0, read 2886, write 0, timeout 54
Requests/sec:    929.79
Transfer/sec:      0.92MB
```