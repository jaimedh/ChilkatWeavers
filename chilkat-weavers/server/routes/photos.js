const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);
const multer = require('multer');
const fs = require ('fs-extra');
const { request } = require('express');
// const photo = multer({ dest: './../public/photos' })

let photo = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
    
      let path = `./public/photos`;
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
    console.log("file",req.file)
    console.log("id",req.params.id);
    usersid = req.params.id;
    knex('users')
      .where({ id: req.params.id })
      .update({file:`/photos/${req.file.filename}`})

      .then((data) => {
        console.log("data id",usersid);
        // promise chaining, return another query and use .then to handle the response
       knex('users').where({ id: req.params.id });
       return data[0];
       

      })
      .then((data) => {
        res.status(200).json(data);
        console.log(data);
        
      })

      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: `Error updating user ${req.params.id}`,
        });
      });
  });

  //get all photos
  router.get('/', (req, res) => {
    knex('weavers')
    .join('images', 'images.weavers_id', 'weavers.id')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({
          message: `Error getting posts`,
        });
      });
  });


  router.get('/:id', (req, res) => {
    knex('weavers')
    .join('images', 'images.weavers_id', 'weavers.id')
      .where({weavers_id: req.params.id })
      .then((data) => {
        console.log(data);
        if (!data.length) {
          res.status(404).json({
            message: `Image not found with the id ${req.params.id}`,
          });
        } else {
          res.status(200).json(data);
          
        }
      })
      .catch(() => {
        res.status(400).json({
          message: `Error getting images ${req.params.id}`,
        });
      });
  });


  module.exports=router;