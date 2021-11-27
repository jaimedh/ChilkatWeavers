const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);

//get all posts
router.get('/', (req, res) => {
  knex('posts')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error getting posts`,
      });
    });
});

//get post by id
router.get('/:id', (req, res) => {
  knex('posts')
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        res.status(404).json({
          message: `Post not found with the id ${req.params.id}`,
        });
      } else {
        res.status(200).json(data[0]);
      }
    })
    .catch(() => {
      res.status(400).json({
        message: `Error getting post ${req.params.id}`,
      });
    });
});

module.exports = router;