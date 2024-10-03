const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'usera',
  password: '1234',
  database: 'webmv'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL');
    process.exit(1);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;
