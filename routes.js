const express = require('express');
const router = express.Router();
const User = require('node-server-mongodb').schemas.user;

router.post('/create', (req, res) => {
  User.create(req.body)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      if (err.code == 11000) {
        res.status(400).send({
          error: 'Account already exists'
        });
      } else {
        res.status(400).send(err);
      }
    });
})

module.exports = router;