const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);
const multer = require('multer');
const fs = require ('fs-extra');
// const photo = multer({ dest: './../public/photos' })

let photo = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
    
      let path = `./../public/photos`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      //originalname is the uploaded file's name with extn
      callback(null, file.originalname);
    }
  })
});

router.put
('/:id',  photo.single('profile_img'), (req, res) => {
    console.log(req.file.filename)
    knex('users')
      .where({ id: req.params.id })
      .update("file",`/photos/${req.file.filename}`)
      .then((data) => {
        // promise chaining, return another query and use .then to handle the response
        return knex('users').where({ id: req.params.id });
      })
      .then((data) => {
        res.status(200).json(data);
      })

      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: `Error updating user ${req.params.id}`,
        });
      });
  });


  module.exports=router;