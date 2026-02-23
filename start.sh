#!/usr/bin/env sh
set -eu

PORT="${PORT:-3000}"
exec npx serve -s . -l "tcp://0.0.0.0:${PORT}"
