#!/bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" = "release-please--branches--main" ]; then
  echo "Skipping markdownlint on branch $branch"
  exit 0
else
  echo "Running markdownlint on branch $branch for files: $@"
  npx markdownlint-cli2 "$@" --config .markdownlint.json
fi
