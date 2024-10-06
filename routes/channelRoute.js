const express = require('express');
const router = express.Router();
const Channel = require('../models/channelModel');

router.post('/', (req, res) => {
  const { name } = req.body;

  Channel.create(name, (err, result) => {
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
  Channel.findAll((err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding channels',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Channel.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding channel',
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

  Channel.update(id, name, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating Channel',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Channel.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting Channel',
        },
      ).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send({
        message: 'Channel not found',
      });
      return;
    }

    res.status(200).send(result);
  });
});

module.exports = router;
