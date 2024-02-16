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

## Conclusion

If you return tiny data, using `pg.Pool` will be better.

If you return a lot of data, maybe `pg.Pool` will be slower than just having one `pg.Client`.

The reason? I don't know, maybe is the overhead of sending data `pg->node->user`, or another thing? If you know, ping me on [Twitter](https://twitter.com/vinii_joga10).
