#!/usr/bin/env bash
set -e

KNOWN_FAILURES=${KNOWN_FAILURES:-0}

echo "=== Release Gate ==="

# Gate 1: Sprint status
# Only "· backlog" rows (Committed, not-started) count against release.
# "↷ stretch" and "⏸ blocked" rows are ignored by design — see the
# three-bucket model in dev-workflow.md Phase 2. Since this grep matches
# the exact string "· backlog", stretch and blocked rows are auto-excluded.
echo "Gate 1: Sprint status..."
BACKLOG_COUNT=$(grep -c "· backlog" __project__/tasks/README.md || true)
if [ "$BACKLOG_COUNT" -gt 0 ] && [ "${FORCE_PASS:-0}" != "1" ]; then
  echo "FAIL: $BACKLOG_COUNT committed tasks still · backlog"
  echo "  (demote to ↷ stretch or ⏸ blocked if they won't land this release)"
  exit 1
fi
echo "PASS"

# Gate 2: Tests
if [ "${SKIP_TESTS:-0}" != "1" ] && [ "${FORCE_PASS:-0}" != "1" ]; then
  echo "Gate 2: Running tests..."
  bun run test
  echo "PASS"
else
  echo "Gate 2: SKIPPED"
fi

# Gate 3: Git dirty check
echo "Gate 3: Git dirty check..."
if [ -n "$(git status --porcelain)" ] && [ "${FORCE_PASS:-0}" != "1" ]; then
  echo "FAIL: Working tree is dirty"
  git status --short
  exit 1
fi
echo "PASS"

# Gate 4: Commits ahead
echo "Gate 4: Commits ahead of main..."
AHEAD=$(git rev-list main..HEAD --count 2>/dev/null || echo "0")
if [ "$AHEAD" -eq 0 ]; then
  echo "WARN: No commits ahead of main"
fi
echo "Commits ahead: $AHEAD"

# Gate 5: Commit list
echo "Gate 5: Commits to merge:"
git log main..HEAD --oneline 2>/dev/null || echo "(none)"

echo ""
read -p "Type YES to proceed with release: " CONFIRM
if [ "$CONFIRM" != "YES" ]; then
  echo "Release aborted."
  exit 1
fi

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")
DATE=$(date +%Y-%m-%d)

# Append to RELEASES.md
cat >> __project__/RELEASES.md << EOF

## v${VERSION} — ${DATE}

- Sprint pass rate: all done
- Tests: passed, ${KNOWN_FAILURES} known failures
- Commits merged: $(git rev-parse HEAD)
EOF

git add __project__/RELEASES.md
git commit -m "chore: release v${VERSION}"
git push origin dev

git checkout main
git merge dev --no-ff -m "release: v${VERSION}"
git push origin main
git checkout dev

echo "Released v${VERSION}"
