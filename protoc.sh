PROGNAME=$0

help() {
  cat << EOF >&2
Usage: $PROGNAME [-d <domain>] [-t <output_type>]

-d, --domain <domain>: kind of domain [auth, place, ecommerce, ...]
-t, --type <output_type>: output type [nestjs, golang, ts, java, ...]
EOF
  exit 1
}

domain=()
types=()
while getopts d:t: flag
do
    case "${flag}" in
        d) domain+=("${OPTARG}");;
        t) types+=("${OPTARG}");;
        *) help;;
    esac
done
(IFS=,; echo "Domain: ${domain[*]}")
(IFS=,; echo "Types: ${types[*]}")