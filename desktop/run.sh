# !/bin/bash

ZK_BAN_PATH=~/Documents/zk-ban-desktop/

export ZK_BAN_URL=$1
export NIXPKGS_ALLOW_UNFREE=1

cd $ZK_BAN_PATH;

echo $ZK_BAN_URL


nix-shell $ZK_BAN_PATH --run "steam-run yarn start" --keep $ZK_BAN_URL

