const { execSync } = require('child_process');
execSync('npm i simple-icons@latest');
const si = require('simple-icons');
const icon = Object.values(si).find(i => i.title && i.title.toLowerCase() === 'capcut');
console.log(icon ? icon.svg : 'NOT FOUND');
