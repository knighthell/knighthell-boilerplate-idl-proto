SHELL_DIR_PATH=$(dirname "$0")
PROTO_DIR_PATH=$(dirname "$SHELL_DIR_PATH")

echo SHELL_DIR_PATH: ${SHELL_DIR_PATH}
echo PROTO_DIR_PATH: ${PROTO_DIR_PATH}

export PATH="$PATH:$(go env GOPATH)/bin"

protoc --proto_path "${PROTO_DIR_PATH%%/}" \
    --go_out="${PROTO_DIR_PATH%%/}"/golang \
    --go_opt=paths=source_relative \
    --go-grpc_out="${PROTO_DIR_PATH%%/}"/golang \
    --go-grpc_opt=paths=source_relative \
    "${PROTO_DIR_PATH%%/}"/**.proto