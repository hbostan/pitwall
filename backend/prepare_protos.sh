#!/bin/bash
PROJECT_ROOT="$(realpath $(dirname ${BASH_SOURCE[0]})/..)"
BUILD_DIR="$PROJECT_ROOT/build"
PROTO_DIR="$PROJECT_ROOT/protos"

mkdir -p $BUILD_DIR
PATH="$(go env GOPATH)/bin:$PATH"
protoc --go_out="$BUILD_DIR" --go_opt=paths=source_relative \
    --go-grpc_out="$BUILD_DIR" --go-grpc_opt=paths=source_relative \
    --proto_path="$PROJECT_ROOT" $PROTO_DIR/*.proto

ln -sf "$BUILD_DIR/protos" "$PROJECT_ROOT/backend/protos"
