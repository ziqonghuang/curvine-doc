# Curvine Documents

## Installation

nodejs >= 9.2.0, use `nvm` to manage node version.  see https://nodejs.org/en/download

## Build & Deploy

```bash
npm start -- --host 0.0.0.0 --port 3000
#build i18n
npm start -- --host 0.0.0.0 --port 3000 --locale zh-cn

#deploy
GIT_USER=$YOUR_GITHUB_USERNAME DEPLOYMENT_BRANCH=main yarn deploy
```

You can edit docs and preview in browser without restart server
