

const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');

router.post('/', (req, res) => {
  const { name, lastName, position } = req.body;

  Employee.create(name, lastName, position, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error creating employee',
        },
      ).send(err);
      return;
    }

    res.status(200).json(result);
  });
});

router.get('/', (req, res) => {
  Employee.findAll((err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding employee',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Employee.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding employee',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, lastName, position } = req.body;

  Employee.update(id, name, lastName, position, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating employee',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Employee.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting employee',
        },
      ).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send({
        message: 'client not found',
      });
      return;
    }

    res.status(200).send(result);
  });
});

module.exports = router;
