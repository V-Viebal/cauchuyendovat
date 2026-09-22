#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"

PORT="${MONOS_PORT:-3147}"
PID_FILE=".monos-server.pid"
LOG_FILE="server.log"

is_running() {
  [[ -f "$PID_FILE" ]] || return 1
  local pid
  pid="$(cat "$PID_FILE" 2>/dev/null || true)"
  [[ -n "$pid" ]] && kill -0 "$pid" 2>/dev/null
}

if is_running; then
  echo "Monos is already running at http://localhost:${PORT}"
  exit 0
fi
rm -f "$PID_FILE"

# Clean any orphaned server on this port
pids="$(ss -lptn "sport = :${PORT}" 2>/dev/null | grep -o 'pid=[0-9]*' | cut -d= -f2 || true)"
if [[ -n "$pids" ]]; then
  for p in $pids; do kill -9 "$p" 2>/dev/null || true; done
  sleep 0.5
fi

python3 server.py >"$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
sleep 0.8

if ! is_running; then
  echo "Monos failed to start. See ${LOG_FILE}." >&2
  rm -f "$PID_FILE"
  exit 1
fi

echo "Monos is running at http://localhost:${PORT}"
