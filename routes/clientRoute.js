
const express = require('express');
const router = express.Router();
const Client = require('../models/clientModel');

router.post('/', (req, res) => {
  const { name, lastName, address } = req.body;

  Client.create(name, lastName, address, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error creating client',
        },
      ).send(err);
      return;
    }

    res.status(200).json(result);
  });
});

router.get('/', (req, res) => {
  Client.findAll((err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding clients',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Client.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding client',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, lastName, address } = req.body;

  Client.update(id, name, lastName, address, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating client',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Client.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting client',
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
