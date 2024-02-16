#! /bin/bash

duration=10
threads=8

printf '# Pg Pool vs Pg Client\n' > RESULTS.md
printf 'Just a simple comparison to see which one performs better.' >> RESULTS.md

for connections in 8 64 128 256 512; do
  printf '\n\n# ' >> RESULTS.md
  printf $connections >> RESULTS.md
  printf ' connections' >> RESULTS.md

  printf '\n\n## With Pool\n\n' >> RESULTS.md

  printf '```' >> RESULTS.md
  wrk -t $threads -c $connections -d $duration --latency http://localhost:3000/clients/1/transactions >> RESULTS.md
  printf '```' >> RESULTS.md

  sudo docker compose restart

  printf '\n\n## Without Pool\n\n' >> RESULTS.md

  printf '```' >> RESULTS.md
  wrk -t $threads -c $connections -d $duration --latency http://localhost:3001/clients/1/transactions >> RESULTS.md
  printf '```' >> RESULTS.md

  sudo docker compose restart
done
