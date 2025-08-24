# zk-ban-desktop

The desktop client of zk-ban

## Dependencies

- Linux Desktop PC
- nix

We test this app in NixOS with Gnome Desktop.

## How to install

```
cd ./desktop
sh install.sh
```

## Getting Started

We can play demo with following commands:

```sh
export NIXPKGS_ALLOW_UNFREE=1; 

# edit config
vim env.sh 

nix-shell ./demo.nix
```
