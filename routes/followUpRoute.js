const express = require('express');
const router = express.Router();
const FollowUp = require('../models/followUpModel');

router.post('/', (req, res) => {
  const { reason, status } = req.body;

  FollowUp.create(reason, status, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error creating FollowUp',
        },
      ).send(err);
      return;
    }

    res.status(200).json(result);
  });
});

router.get('/', (req, res) => {
  FollowUp.findAll((err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding followUps',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  FollowUp.findById(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error finding FollowUp',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const reason = req.body.reason;
  const status = req.body.status;

  FollowUp.update(id, reason, status, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error updating FollowUp',
        },
      ).send(err);
      return;
    }

    res.status(200).send(result);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  FollowUp.delete(id, (err, result) => {
    if (err) {
      res.status(500).json(
        {
          message: 'Error deleting FollowUp',
        },
      ).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send({
        message: 'FollowUp not found',
      });
      return;
    }

    res.status(200).send(result);
  });
});

module.exports = router;
