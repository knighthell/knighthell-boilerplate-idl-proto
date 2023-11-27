SHELL_DIR_PATH=$(dirname "$0")
PROTO_DIR_PATH=$(dirname "$SHELL_DIR_PATH")

echo SHELL_DIR_PATH: ${SHELL_DIR_PATH}
echo PROTO_DIR_PATH: ${PROTO_DIR_PATH}

export PATH="$PATH:$HOME/.pub-cache/bin"

protoc --proto_path "${PROTO_DIR_PATH%%/}" \
    --dart_out=grpc:"${PROTO_DIR_PATH%%/}"/dart \
    "${PROTO_DIR_PATH%%/}"/**.proto