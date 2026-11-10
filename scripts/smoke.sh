#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ ! -x node_modules/.bin/next ]]; then echo 'Run npm ci first.' >&2; exit 1; fi
port="${PORTFOLIO_SMOKE_PORT:-34173}"
log=$(mktemp)
npm run dev -- --hostname 127.0.0.1 --port "$port" >"$log" 2>&1 &
pid=$!
cleanup() { kill "$pid" 2>/dev/null || true; wait "$pid" 2>/dev/null || true; rm -f "$log"; }
trap cleanup EXIT
for ((i=0; i<60; i++)); do
  if ! kill -0 "$pid" 2>/dev/null; then cat "$log" >&2; exit 1; fi
  if curl --fail --silent "http://127.0.0.1:$port/" > /dev/null; then
    echo 'Local homepage responded successfully.'; exit 0
  fi
  sleep 1
done
cat "$log" >&2
exit 1
