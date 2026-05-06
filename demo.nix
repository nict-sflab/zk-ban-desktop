{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [ steam-run nodejs yarn nss nspr xdg-utils glibcLocales noto-fonts google-chrome ];

  shellHook = ''
    source ./env.sh
    export LD_LIBRARY_PATH=${pkgs.nss}/lib:${pkgs.nspr}/lib:$LD_LIBRARY_PATH
    cd ./desktop
    sh install.sh
    cd ..
    sleep $ZK_BAN_SLEEP; 
    google-chrome-stable $ZK_BAN_VERIFIER & 
    $ZK_BAN_SIGNER join --token $ZK_BAN_TOKEN --keyPath $ZK_BAN_KEYPATH 
    $ZK_BAN_SIGNER daemon --keyPath $ZK_BAN_KEYPATH 
  '';
}
