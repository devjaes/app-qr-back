const db = require('../config/dbMySQL');

const Agency = {};

Agency.create = (name, address, callback) => {
  const query = `INSERT INTO agencies (name, address) VALUES (?, ?)`;

  db.query(query, [name, address], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result.insertId);
  });
};

Agency.findAll = (callback) => {
  const query = `SELECT * FROM agencies`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};


Agency.findById = (id, callback) => {
  const query = `SELECT * FROM agencies WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

Agency.update = (id, name, address, callback) => {
  const query = `UPDATE agencies SET name = ?, address = ? WHERE id = ?`;
  db.query(query, [name, address, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

Agency.delete = (id, callback) => {
  const query = `DELETE FROM agencies WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

module.exports = Agency;
