const db = require('../config/dbMySQL');

const ClaimUnclaim = {};

ClaimUnclaim.create = (type, description, callback) => {
  const query = `INSERT INTO claim_unclaims (type, description) VALUES (?, ?)`;

  db.query(query, [type, description], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result.insertId);
  });
};

ClaimUnclaim.findAll = (callback) => {
  const query = `SELECT * FROM claim_unclaims`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};


ClaimUnclaim.findById = (id, callback) => {
  const query = `SELECT * FROM claim_unclaims WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    description
    callback(null, result);
  });
};

ClaimUnclaim.update = (id, type, description, callback) => {
  const query = `UPDATE claim_unclaims SET type = ?, description = ? WHERE id = ?`;
  db.query(query, [type, description, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

ClaimUnclaim.delete = (id, callback) => {
  const query = `DELETE FROM claim_unclaims WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

module.exports = ClaimUnclaim;
