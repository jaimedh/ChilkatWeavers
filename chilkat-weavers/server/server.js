const express = require("express");
const app = express();
const knex = require("knex")(require("./knexfile").development);
const jwt = require("jsonwebtoken");
const usersRoutes = require("./routes/users");
const photosRoutes = require("./routes/photos");
const postRoutes = require("./routes/posts");
require("dotenv").config();

const cors = require("cors");
const PORT = process.env.PORT || 8082;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// const name = [
//   {
//     id: 7,
//     username: "Jaime",
//     password: "test",
//   },
// ];
const authorize = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "No token found" });
  }
  const authTokenArray = req.headers.authorization.split(" ");
  if (
    authTokenArray[0].toLowerCase() !== "bearer" &&
    authTokenArray.length !== 2
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  jwt.verify(authTokenArray[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "The token is expired or invalid" });
    }
    req.payload = decoded;
    next();
  });
};
// login endpoint
app.post("/login", (req, res, next) => {
    console.log(req.body)
  const usersLogin = {
    username: req.body.username,
    password: req.body.password,
    name: "Jaime",
    community: null,
    nation: null,
    crest: null,
  };
  knex.select("*").from("users")
//   .where({ id: req.params.id })
    (usersLogin)
    .then((users) => {
      res.json(users[0]);
        console.log('users', users[0]);
  const foundUser = users.find(user => username === username);
  console.log(foundUser);

  if (!foundUser) {
    return res
      .status(401)
      .json({ message: "This user doesn't exist. Please sign up!" });
  }

  if (foundUser.password === password) {
    // Generate a token and send it back
    const token = jwt.sign(
      {
        name: foundUser.name,
        userId: foundUser.id,
        username: foundUser.username,
        loginTime: Date.now(),
      },
      process.env.JWT_SECRET,
      { expiresIn: "50m" }
    );
    console.log("it works");
    return res.status(200).json({ token });
  } else {
    return res.status(403).json({ message: "Invalid username or password" });
  }
})  
 .catch((error) => next(error));
})



app.get("/:id/profile", authorize, (req, res) => {
  res.json({
    tokenInfo: req.payload,
  });
});

app.use("/users", usersRoutes);
app.use("/images", photosRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
