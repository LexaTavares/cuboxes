var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index');
var bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req,res,next) => {
  console.log(`${req.url} -${req.method}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routers
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets',express.static('assets'));

// start server
app.listen(app.get('port'),()=> {
  console.log('Server on port',app.get('port'))
});