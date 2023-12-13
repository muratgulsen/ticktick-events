var parseENV = require('./parseENV')
    fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, '.env');


let envString

try {
  envString = fs.readFileSync('./.env', {encoding: 'utf-8'})
} catch (err) {
  throw new ReferenceError(`Failed to read the environment file.\n${err}`)  
}

