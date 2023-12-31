SHELL_DIR_PATH=$(dirname "$0")
PROTO_DIR_PATH=$(dirname "$SHELL_DIR_PATH")

echo SHELL_DIR_PATH: ${SHELL_DIR_PATH}
echo PROTO_DIR_PATH: ${PROTO_DIR_PATH}

protoc -I "${PROTO_DIR_PATH%%/}" \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd \
    --ts_proto_opt=useOptionals=none \
    --ts_proto_opt=useDate=true \
    --ts_proto_opt=env=both \
    --ts_proto_opt=unrecognizedEnum=false \
    --ts_proto_out="${PROTO_DIR_PATH%%/}"/ts/ \
    --ts_proto_opt=stringEnums=true \
    "${PROTO_DIR_PATH%%/}"/**.proto
