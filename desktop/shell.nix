{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [ steam-run nodejs yarn nss nspr xdg-utils ];

  shellHook = ''
    source ../env.sh
    export LD_LIBRARY_PATH=${pkgs.nss}/lib:${pkgs.nspr}/lib:$LD_LIBRARY_PATH
    steam-run yarn start
  '';
}
