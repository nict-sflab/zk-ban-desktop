# !/bin/bash

ZK_BAN_PATH=~/Documents/zk-ban-desktop/
export ZK_BAN_SIGNER="../zk-ban-system/example/signer/signer"
export ZK_BAN_VERIFIER_URL="http://localhost:8000/verify"

export ZK_BAN_URL=$1
export NIXPKGS_ALLOW_UNFREE=1


cd $ZK_BAN_PATH;

echo $ZK_BAN_URL


nix-shell $ZK_BAN_PATH --run "steam-run yarn start" --keep $ZK_BAN_URL --keep $ZK_BAN_SIGNER --keep $ZK_BAN_VERIFIER_URL

