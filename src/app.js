const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname:'.hbs'
}));
app.set('engine','.hbs');
//middle wares
app.use(morgan('dev'));
app.use(express.urlencoded());
//routes
app.use(require('./routes/index'));
//statics
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;