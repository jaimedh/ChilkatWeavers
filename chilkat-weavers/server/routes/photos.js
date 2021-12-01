const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);
const multer = require('multer');
const photo = multer({ dest: './../public/photos' })



router.put
('/',  photo.single('profile_img'), (req, res) => {
    console.log(req.file)
    knex('users')
      .where({ id: request.params.id })
      .update(request.body.file)
      .then((data) => {
        // promise chaining, return another query and use .then to handle the response
        return knex('users').where({ id: request.params.id });
      })
      .then((data) => {
        respond.status(200).json(data);
      })
      .catch(() => {
        respond.status(400).json({
          message: `Error updating user ${request.params.id}`,
        });
      });
  });


  module.exports=router;