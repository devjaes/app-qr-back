const express = require('express');
const router = express.Router();
const Agency = require('../models/agencyModel');

router.post('/', (req, res) => {
  const { name, address } = req.body;

  Agency.create(name, address, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error creating agency',
        },
      ).send(err);
      return;
    }

    res.status(200).json(result);
  });
});

router.get('/', (req, res) => {
  Agency.findAll((err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding agencies',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Agency.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding agency',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const address = req.body.address;

  Agency.update(id, name, address, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating agency',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Agency.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting agency',
        },
      ).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send({
        message: 'Agency not found',
      });
      return;
    }

    res.status(200).send(result);
  });
});

module.exports = router;
