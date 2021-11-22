#!/bin/sh

set -e

emcc \
    -Os \
    -s SINGLE_FILE=1 \
    -s EXPORTED_FUNCTIONS='["_pikchr"]' \
    -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
    -s MALLOC=emmalloc \
    -s WASM_ASYNC_COMPILATION=0 \
    -s MODULARIZE=1 \
    -s STRICT=1 \
    -o pikchr.js \
    pikchr.c
