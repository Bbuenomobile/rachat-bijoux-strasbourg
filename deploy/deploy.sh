#!/usr/bin/env bash
# Run on the VPS as root or with sudo. Idempotent.
set -euo pipefail

APP_DIR="/var/www/diamantairelille"
REPO_URL="${REPO_URL:-https://github.com/PLACEHOLDER/diamantairelille.git}"
NODE_MAJOR=20

echo "==> Installing system dependencies (Node ${NODE_MAJOR}, nginx, pm2, certbot)..."
if ! command -v node >/dev/null || ! node -v | grep -q "v${NODE_MAJOR}"; then
    curl -fsSL https://deb.nodesource.com/setup_${NODE_MAJOR}.x | bash -
    apt-get install -y nodejs
fi
apt-get update -y
apt-get install -y nginx git ufw certbot python3-certbot-nginx
npm install -g pm2

echo "==> Cloning / updating repo..."
mkdir -p /var/www
if [ ! -d "${APP_DIR}/.git" ]; then
    git clone "${REPO_URL}" "${APP_DIR}"
fi
cd "${APP_DIR}"
git fetch --all
git reset --hard origin/main
cd "${APP_DIR}/site"

echo "==> Installing app dependencies..."
npm ci --no-audit --no-fund

echo "==> Building..."
npm run build

echo "==> Starting / reloading PM2..."
pm2 startOrReload ecosystem.config.cjs
pm2 save

echo "==> Configuring nginx..."
cp deploy/nginx.conf /etc/nginx/sites-available/diamantairelille.co
ln -sf /etc/nginx/sites-available/diamantairelille.co /etc/nginx/sites-enabled/diamantairelille.co
nginx -t && systemctl reload nginx

echo "==> Firewall..."
ufw allow OpenSSH || true
ufw allow 'Nginx Full' || true
yes | ufw enable || true

echo ""
echo "✅ Deploy complete. Don't forget to:"
echo "   - Install the Cloudflare Origin Certificate at /etc/ssl/cloudflare/"
echo "   - Set Cloudflare DNS A record to this VPS IP"
echo "   - Create /var/www/diamantairelille/site/.env with RESEND_API_KEY etc."
