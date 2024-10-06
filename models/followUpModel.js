const db = require('../config/dbMySQL');

const FollowUp = {};

FollowUp.create = (reason, status, callback) => {
  const query = `INSERT INTO follow_up (reason, status) VALUES (?, ?)`;

  db.query(query, [reason, status], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result.insertId);
  });
};

FollowUp.findAll = (callback) => {
  const query = `SELECT * FROM follow_up`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};


FollowUp.findById = (id, callback) => {
  const query = `SELECT * FROM follow_up WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    status
    callback(null, result);
  });
};

FollowUp.update = (id, reason, status, callback) => {
  const query = `UPDATE follow_up SET reason = ?, status = ? WHERE id = ?`;
  db.query(query, [reason, status, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

FollowUp.delete = (id, callback) => {
  const query = `DELETE FROM follow_up WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

module.exports = FollowUp;
