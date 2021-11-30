const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//get all users
router.get('/', (request, respond) => {
    knex('users')
    .then((usersData) => {
        respond.status(200).json(usersData);
    })
    .catch(() => {
        respond.status(400).json({
            message: 'Error getting users'
        });
    });
});

//get user by id

// router.get('/:id', (request, respond) => {
//     knex('users')
//     .where({ id: request.params.id })
//     .then((data) => {
//         if (!data.length) {
//             respond.status(404).json({
//                 message: `User not found with the id ${request.params.id}`,
//             });
//         } else {
//             respond.status(200).json(data[0]);
//         }
//     })
//     .catch(() => {
//         respond.status(400).json({
//             message: `Error getting user ${request.params.id}`,
//         });
//     });
// });

router.get('/:id/posts', (request, respond) => {
    knex('usersinfo')
      .where({ user_id: request.params.id })
      .then((data) => {
        if (!data.length) {
          respond.status(404).json({
            message: `User not found with the id ${request.params.id}`,
          });
        } else {
          respond.status(200).json(data);
        }
      })
      .catch(() => {
        respond.status(400).json({
          message: `Error getting posts for user ${request.params.id}`,
        });
      });
  });

  //get posts by user with id, using inner join
   router.get('/:id/', (req, res) => {

      knex('users')
        .join('usersinfo', 'usersinfo.users_id', 'users.id') // join users table
        .where({ users_id: req.params.id })
        .then((data) => {
          if (!data.length) {
            res.status(404).json({
              message: `User not found with the id ${req.params.id}`,
            });
          } else {
            res.status(200).json(data);
          }
        })
        .catch(() => {
          res.status(400).json({
            message: `Error getting posts for user ${req.params.id}`,
          });
        });
    });

  
  //new user 
  // to add photos  upload.single('profileImage'),
  router.post('/', (request, respond) => {
    console.log(request.body);
      // if (!request.body.name) {
      //   respond.status(400).json({ message: `Please provide a name for the user` });
      //   return;
      // }
      const usersData = {
        name: request.body.name,
        community: request.body.community,
        nation: request.body.nation,
        crest: request.body.crest
      }
      const usersMoreData = {
        location: request.body.location,
        age: request.body.age,
        teacher: request.body.teacher,
        experience: request.body.experience,
        blanket: request.body.blanket,
        supply: request.body.supply,
        fb: request.body.fb,
        instagram: request.body.instagram
      }
      knex('users')
        .insert(usersData)
        .then((data) => {
          console.log(data);
          usersMoreData.users_id=data[0];
          return knex('usersinfo')
          .insert(usersMoreData)
          }).then((data) => {
            console.log(data[0]);
            respond.status(201).json({
                message: `User ${request.body.name} created successfully with the id ${data}`, 
            
            });
        })
        .catch(() => {
            respond.status(400).json({
              message: `Error creating user ${request.body.name}`,
      });
  });
});

 router.post('/', (request, respond) => {
      if (!request.body.name) {
        respond.status(400).json({ message: `Please provide a name for the user` });
        return;
      }
      knex('usersinfo')
        .insert(request.body)
        .then((data) => {
            respond.status(201).json({
                message: `UsersInfo ${request.body.name} created successfully with the id ${data}`, 
            });
        })
        .catch(() => {
            respond.status(400).json({
              message: `Error creating user ${request.body.name}`,
      });
  });
});

//update user
router.put('/:id', (request, respond) => {
    knex('users')
      .where({ id: request.params.id })
      .update(request.body)
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

  // delete user
  router.delete('/:id', (request, respond) => {
    knex('users')
      .where({ id: request.params.id })
      .del(request.body)
      .then((data) => {
        respond.sendStatus(204);
      })
      .catch(() => {
        respond.status(400).json({
          message: `Error deleting user ${request.params.id}`,
        });
      });
  });
  
  module.exports = router;
  
