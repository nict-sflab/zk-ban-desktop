export ZK_BAN_URL=$1

chmod +x ./run.sh
mkdir -p ~/.local/share/applications 
sed "s|ZK_BAN_DESKTOP|$ZK_BAN_DESKTOP_PATH|g" zk-ban.template.desktop > ~/.local/share/applications/zk-ban.desktop
xdg-mime default zk-ban.desktop x-scheme-handler/zk-ban

