#!/bin/bash

PROGNAME=$0
SHELL_DIR_PATH=$(dirname "$0")
COMMON_PROTO_DIR_PATH="${SHELL_DIR_PATH}/domain/common"

help() {
  cat << EOF >&2
Usage: $PROGNAME [-d <domain>] [-t <output_type>]

-d, --domain <domain>: kind of domain [auth, place, ecommerce, ...]
-t, --type <output_type>: output type [nestjs, golang, ts, java, ...]
EOF
  exit 1
}

compileNestJs() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"

  echo SHELL_DIR_PATH: "${SHELL_DIR_PATH}"
  echo domainProtoDirPath: "${domainProtoDirPath}"
  echo COMMON_PROTO_DIR_PATH: "${COMMON_PROTO_DIR_PATH}"

  protoc -I "${domainProtoDirPath%%/}" -I "${COMMON_PROTO_DIR_PATH}"\
      --plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd \
      --ts_proto_opt=useOptionals=none \
      --ts_proto_opt=useDate=true \
      --ts_proto_opt=env=both \
      --ts_proto_opt=unrecognizedEnum=false \
      --ts_proto_opt=nestJs=true \
      --ts_proto_opt=addNestjsRestParameter=true \
      --ts_proto_opt=stringEnums=true \
      --ts_proto_out="${domainProtoDirPath%%/}"/nestjs/ \
      "${domainProtoDirPath%%/}"/**.proto
}

domains=()
types=()
while getopts d:t: flag
do
    case "${flag}" in
        d) domains+=("${OPTARG}");;
        t) types+=("${OPTARG}");;
        *) help;;
    esac
done

(IFS=,; echo "Domain: ${domains[*]}")
(IFS=,; echo "Types: ${types[*]}")

compileNestJs place