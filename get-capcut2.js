const si = require('simple-icons');
const icon = Object.values(si).find(i => i.slug === 'capcut');
console.log(icon ? icon.svg : 'NOT FOUND');
