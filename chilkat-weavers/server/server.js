const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const photosRoutes = require('./routes/photos');
const postRoutes = require('./routes/posts');
const cors = require('cors');
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(express.static("./public"));
app.use(cors());
app.use('/users', usersRoutes);
app.use('/photos', photosRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, () => {
    console.log('app is running on port ' + PORT);
});
