const db = require('../config/dbMySQL');

const Client = {};

Client.create = (name, lastName, address, callback) => {
  const query = `INSERT INTO clients (name, last_name, address) VALUES (?, ?, ?)`;
  db.query(query, [name, lastName, address], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result.insertId);
  });
}

Client.findAll = (callback) => {
  const query = `SELECT * FROM clients`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Client.findById = (id, callback) => {
  const query = `SELECT * FROM clients WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Client.update = (id, name, lastName, address, callback) => {
  const query = `UPDATE clients SET name = ?, last_name = ?, address = ? WHERE id = ?`;
  db.query(query, [name, lastName, address, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Client.delete = (id, callback) => {
  const query = `DELETE FROM clients WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

module.exports = Client;
