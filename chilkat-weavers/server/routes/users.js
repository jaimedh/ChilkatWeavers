const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile").development);
const multer = require("multer");
const fs = require("fs-extra");
const { request } = require("express");
// const photo = multer({ dest: './../public/photos' })

// let photo = multer({
//   storage: multer.diskStorage({
//     destination: (request, file, callback) => {
//       let path = `./../public/photos`;
//       fs.mkdirsSync(path);
//       callback(null, path);
//     },
//     filename: (request, file, callback) => {
//       //originalname is the uploaded file's name with extn
//       callback(null, file.originalname);
//     },
//   }),
// });
//get all users photo.single('profile_img'),
router.get("/", (request, respond) => {
  knex("users")
    .join("usersinfo", "usersinfo.users_id", "users.id") // join users table
  
    .then((usersData) => {
      respond.status(200).json(usersData);
    })
    .catch(() => {
      respond.status(400).json({
        message: "Error getting users",
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

// router.get('/:id/posts', (request, respond) => {
//     knex('usersinfo')
//       .where({ user_id: request.params.id })
//       .then((data) => {
//         if (!data.length) {
//           respond.status(404).json({
//             message: `User not found with the id ${request.params.id}`,
//           });
//         } else {
//           respond.status(200).json(data);
//         }
//       })
//       .catch(() => {
//         respond.status(400).json({
//           message: `Error getting posts for user ${request.params.id}`,
//         });
//       });
//   });

//get posts by user with id, using inner join
router.get("/:id", (req, res) => {
  console.log(req.params);
  knex("users")
    .join("usersinfo", "usersinfo.users_id", "users.id") // join users table
    .where({users_id: req.params.id })
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

//new user photo.single("profile_img"),

router.post("/",  (request, respond) => {
  console.log("text", request.body);
  // if (!request.body.name) {
  //   respond.status(400).json({ message: `Please provide a name for the user` });
  //   return;
  // }
  const usersData = {
    file: null,
    name: request.body.name,
    community: request.body.community,
    nation: request.body.nation,
    crest: request.body.crest,
  };
  const usersMoreData = {
    location: request.body.location,
    age: request.body.age,
    teacher: request.body.teacher,
    experience: request.body.experience,
    blanket: request.body.blanket,
    supply: request.body.supply,
    fb: request.body.fb,
    instagram: request.body.instagram,
  };
  let userId 
  knex("users")
    .insert(usersData)
    .then((data) => {
      console.log("user created",data);
      userId = data[0];
      usersMoreData.users_id = data[0];
     
      return knex("usersinfo").insert(usersMoreData);
    
    })
    .then((data) => {
      console.log("new user",data);
      respond.status(201).json({
       id:userId,
        message: `User ${request.body.name} created successfully with the id ${data}`,
      });
    })
    .catch(() => {
      respond.status(400).json({
        message: `Error creating user ${request.body.name}`,
      });
    });
});

//  router.post('/', (request, respond) => {
//       if (!request.body.name) {
//         respond.status(400).json({ message: `Please provide a name for the user` });
//         return;
//       }
//       knex('usersinfo')
//         .insert(request.body)
//         .then((data) => {
//             respond.status(201).json({
//                 message: `UsersInfo ${request.body.name} created successfully with the id ${data}`,
//             });
//         })
//         .catch(() => {
//             respond.status(400).json({
//               message: `Error creating user ${request.body.name}`,
//       });
//   });
//  });

//update user
// router.put("/:id", (request, respond) => {
//   console.log(request.body);
//   const usersData = {
//     name: request.body.name,
//     community: request.body.community,
//     nation: request.body.nation,
//     crest: request.body.crest
//   }
//   const usersMoreData = {
//     location: request.body.location,
//     age: request.body.age,
//     teacher: request.body.teacher,
//     experience: request.body.experience,
//     blanket: request.body.blanket,
//     supply: request.body.supply,
//     fb: request.body.fb,
//     instagram: request.body.instagram
//   }
//   knex("users")
//     .where({ id: request.params.id })
//     .update(usersData)
//     .then((data) => {
//       console.log(data);
//       usersMoreData.users_id = data[0];
//       return knex("usersinfo")
//         .where({ id: request.params.id })
//         .update(usersMoreData);
//     })
//     .then((data) => {
//       console.log(data);
//       respond.status(200).json({
//         message: `User ${request.body.name} created successfully with the id ${data}`,
//       });
//     })
//     .catch(() => {
//       respond.status(400).json({
//         message: `Error updating user ${request.params.id}`,
//       });
//     });
// });

// delete user
router.delete("/:id", (request, respond) => {
  knex("users")
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
