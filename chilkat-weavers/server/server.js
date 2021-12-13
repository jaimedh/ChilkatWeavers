const express = require('express');
const app = express();
const session = require('express-session');
const usersRoutes = require('./routes/users');
const photosRoutes = require('./routes/photos');
const cors = require('cors');
const knex =  require('knex')(require('./knexfile').development) ;
const PORT = process.env.PORT || 8082;


 app.use(cors());
 app.use(express.json());
 app.use(express.static("./public"));



app.use('/users', usersRoutes);
app.use('/images', photosRoutes);


app.listen(PORT, () => {
    console.log('app is running on port ' + PORT);
});
