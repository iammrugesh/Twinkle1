const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');

const searchRoutes = require('./routes/search.js');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(searchRoutes);
mongoConnect(() => {
    app.listen(3000, () => 'app is running on port 3000');
})