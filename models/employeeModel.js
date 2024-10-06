
const db = require('../config/dbMySQL');

const Employee = {};

Employee.create = (name, lastName, position, callback) => {
  const query = `INSERT INTO employees (name, last_name, position) VALUES (?, ?, ?)`;
  db.query(query, [name, lastName, position], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result.insertId);
  });
}

Employee.findAll = (callback) => {
  const query = `SELECT * FROM employees`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Employee.findById = (id, callback) => {
  const query = `SELECT * FROM employees WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Employee.update = (id, name, lastName, position, callback) => {
  const query = `UPDATE employees SET name = ?, last_name = ?, position = ? WHERE id = ?`;
  db.query(query, [name, lastName, position, id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

Employee.delete = (id, callback) => {
  const query = `DELETE FROM employees WHERE id = ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  });
}

module.exports = Employee;
