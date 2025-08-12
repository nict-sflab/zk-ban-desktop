{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [ steam-run nodejs yarn nss nspr google-chrome ];

  shellHook = ''
    export LD_LIBRARY_PATH=${pkgs.nss}/lib:${pkgs.nspr}/lib:$LD_LIBRARY_PATH
  '';
}
