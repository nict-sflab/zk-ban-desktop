const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../..');
const rootPackagePath = path.join(rootPath, 'package.json');
const appPath = path.join(rootPath, 'release/app');
const appPackagePath = path.join(appPath, 'package.json');

const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, 'utf8'));
const existingAppPackage = fs.existsSync(appPackagePath)
  ? JSON.parse(fs.readFileSync(appPackagePath, 'utf8'))
  : {};

const appPackage = {
  name: rootPackage.name,
  version: rootPackage.version ?? '0.0.0',
  description: rootPackage.description,
  license: rootPackage.license,
  author: rootPackage.author,
  main: './dist/main/main.js',
  dependencies: existingAppPackage.dependencies ?? {},
};

fs.mkdirSync(appPath, { recursive: true });
fs.writeFileSync(appPackagePath, `${JSON.stringify(appPackage, null, 2)}\n`);
