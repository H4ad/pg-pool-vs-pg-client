# pg.Pool vs pg.Client

Basically, I just want to check which approach is better/faster.

You can run the test by yourself with:

```bash
sudo docker compose up -d
```

And then run the benchmark:

```bash
bash bench.sh
```

It will generate a file called `RESULTS.md`.

## Results

I run twice, one with `LIMIT 10` in the results and the other one without the limit:

- [With Limit](./RESULTS-with-limit.md)
- [Without Limit](./RESULTS-without-limit.md)
