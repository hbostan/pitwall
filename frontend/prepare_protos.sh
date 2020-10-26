#!/bin/bash
PROJECT_ROOT="$(realpath $(dirname ${BASH_SOURCE[0]})/..)"
BUILD_DIR="$PROJECT_ROOT/build"
PROTO_DIR="$PROJECT_ROOT/protos"

mkdir -p $BUILD_DIR
if ! command -v protoc-gen-grpc-web &>/dev/null
then
  echo -e "Cannot find grpc-web code generator plugin.\nPlease check:
  https://github.com/grpc/grpc-web"
fi
protoc --js_out=import_style=commonjs:"$BUILD_DIR" \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"$BUILD_DIR" \
    --proto_path="$PROJECT_ROOT" $PROTO_DIR/*.proto

ln -sf "$BUILD_DIR/protos" "$PROJECT_ROOT/frontend/src/protos"
