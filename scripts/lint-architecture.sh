#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Catch accidental committed private key material in application sources.
if rg -n --glob '*.{ts,tsx,js,jsx}' -- '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----' app; then
  echo 'Private key material found in app/' >&2; exit 1
fi
echo 'Application source secret-marker check passed.'
