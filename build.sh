#!/bin/sh

echo "Building using Bun"
bun build index.js --outdir dist
echo "Running the result using Bun"
bun run dist/index.js

echo "Building using esbuild"
bunx esbuild --bundle index.js --outdir=dist.esbuild
echo "Running the result using Bun"
bun run dist.esbuild/index.js
