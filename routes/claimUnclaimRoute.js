const express = require('express');
const router = express.Router();
const ClaimUnclaim = require('../models/claimUnclaimModel');

router.post('/', (req, res) => {
  const { type, description } = req.body;

  ClaimUnclaim.create(type, description, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error creating Claim or unclaim',
        },
      ).send(err);
      return;
    }

    res.status(200).json(result);
  });
});

router.get('/', (req, res) => {
  ClaimUnclaim.findAll((err, result) => {
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

  ClaimUnclaim.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding Claim or unclaim',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const type = req.body.type;
  const description = req.body.description;

  ClaimUnclaim.update(id, type, description, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating Claim or unclaim',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  ClaimUnclaim.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting Claim or unclaim',
        },
      ).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send({
        message: 'Claim or unclaim not found',
      });
      return;
    }

    res.status(200).send(result);
  });
});

module.exports = router;
