#!/bin/bash

PROGNAME=$0
SHELL_DIR_PATH=$(dirname "$0")
COMMON_PROTO_DIR_PATH="${SHELL_DIR_PATH}/common"

help() {
  cat << EOF >&2
Usage: $PROGNAME [-d <domain>] [-t <output_type>]

-d, --domain <domain>: kind of domain [auth, place, ecommerce, ...]
-t, --type <compile_type>: compile type [nestjs, golang, ts, java, ...]
EOF
  exit 1
}



compileNestJs() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"

#  echo SHELL_DIR_PATH: "${SHELL_DIR_PATH}"
#  echo domainProtoDirPath: "${domainProtoDirPath}"
#  echo COMMON_PROTO_DIR_PATH: "${COMMON_PROTO_DIR_PATH}"

  protoc -I "${domainProtoDirPath%%/}" -I "${COMMON_PROTO_DIR_PATH}" \
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

compileTypeScript() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"

#  echo SHELL_DIR_PATH: "${SHELL_DIR_PATH}"
#  echo domainProtoDirPath: "${domainProtoDirPath}"
#  echo COMMON_PROTO_DIR_PATH: "${COMMON_PROTO_DIR_PATH}"

  protoc -I "${domainProtoDirPath%%/}" -I "${COMMON_PROTO_DIR_PATH}" \
      --plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd \
      --ts_proto_opt=useOptionals=none \
      --ts_proto_opt=useDate=true \
      --ts_proto_opt=env=both \
      --ts_proto_opt=unrecognizedEnum=false \
      --ts_proto_out="${domainProtoDirPath%%/}"/ts/ \
      --ts_proto_opt=stringEnums=true \
      "${domainProtoDirPath%%/}"/**.proto
}

compileGolang() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"

  export PATH="$PATH:$(go env GOPATH)/bin"

  protoc -I "${domainProtoDirPath%%/}" -I "${COMMON_PROTO_DIR_PATH}" \
      --go_out="${domainProtoDirPath%%/}"/golang \
      --go_opt=paths=source_relative \
      --go-grpc_out="${domainProtoDirPath%%/}"/golang \
      --go-grpc_opt=paths=source_relative \
      "${domainProtoDirPath%%/}"/**.proto
}

compileDart() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"

  export PATH="$PATH:$HOME/.pub-cache/bin"

  protoc -I "${domainProtoDirPath%%/}" -I "${COMMON_PROTO_DIR_PATH}" \
      --dart_out=grpc:"${domainProtoDirPath%%/}"/dart \
      "${domainProtoDirPath%%/}"/**.proto
}

compileJava() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"
}

compileKotlin() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"
}

compileRust() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"
}

compilePython() {
  domain=$1
  domainProtoDirPath="${SHELL_DIR_PATH}/domain/${domain}"
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

for domain in "${domains[@]}"
do
  for type in "${types[@]}"
  do
    case $type in
    nestjs)
      compileNestJs "$domain"
      ;;
    ts)
      compileTypeScript "$domain"
      ;;
    golang)
      compileGolang "$domain"
      ;;
    dart)
      compileDart "$domain"
      ;;
    java)
      compileJava "$domain"
      ;;
    kotlin)
      compileKotlin "$domain"
      ;;
    rust)
      compileRust "$domain"
      ;;
    python)
      compilePython "$domain"
      ;;
    esac
    echo "Domain: $domain, Type: $type Compiled"
  done
done