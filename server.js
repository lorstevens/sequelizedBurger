var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");
// var routes = require('./controllers/burgers_controller.js');
var mysql = require('mysql');

// var db = require ("./models");





var app = express();
var port = process.env.PORT || 3306;

var db = require('./models');

// Serve static content for the app from the "public" directory in the application directory. 
app.use(express.static(__dirname + "/public"));
// Here, we are going to incorporate our bodyparser NPM package using express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json" }));

// Here, we are going to incorporate our method override NPM package using express. 
app.use(methodOverride("_method"));

// Here, we are going to incorporate our handlebars NPM package using express. 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// // app.use(express.static(path.join(_dirname, "public")));
// app.use(express.static(__dirname + "/public"));
// // app.use(bodyParser.urlencoded({ extended: true }));


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json" }));

// // Here, we are going to incorporate our method override NPM package using express. 
// app.use(methodOverride("_method"));

// // var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



// app.get("/", function (req, res){
// 	burger.all(function(data){ //burger references the require burgers.js file
// 		var burgerObject = {
// 			burgers: data
// 		}
// 		console.log(burgerObject)
// 		res.render("index", burgerObject) // rendering the burgerObject to the index.handlebar file
// 	});
// });

// app.use("/api/burgers", routes);
var routes= require("./controllers/burgers_controller.js")(app);


db.sequelize.sync().then(function(){

	app.listen(port, function() {
	  console.log("listening on port", port);
	});

});


