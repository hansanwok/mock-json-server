var fs = require('fs');
var fileName = './db.json';

module.exports = (db) => {
  fs.writeFileSync(fileName, JSON.stringify(db));
}

