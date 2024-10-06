const db = require('../config/dbMySQL');

const Channel = {};

Channel.create = (name, callback) => {
  const query = `INSERT INTO channels (name) VALUES (?)`;
  db.query(query, [name], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result.insertId);
  });
}

Channel.findAll = (callback) => {
  const query = `SELECT * FROM channels`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Channel.findById = (id, callback) => {
  const query = `SELECT * FROM channels WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Channel.update = (id, name, callback) => {
  const query = `UPDATE channels SET name = ? WHERE id = ?`;
  db.query(query, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Channel.delete = (id, callback) => {
  const query = `DELETE FROM channels WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

module.exports = Channel;
