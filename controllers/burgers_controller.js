// var express = require("express");
// var router = express.Router();
var db = require("../models");

// router.post("/", function (req, res){


module.exports = function (app){
	app.get("/", function(req,res){
	db.burgers.findAll({}).then(function(burgerCB){
        res.render("index", {burgers: burgerCB}); //render the index page with the burgers object
        
    });
});

	app.post("/", function(req,res){
        db.burgers.create({
            burger_name: request.body.burger_name
        }).then(function(burgerCB){
            res.redirect("/");
        });

});

        app.put("/", function(req,res){
            db.burgers.update({
                devoured: true
            }, 
            {
                where: {
                    id: request.body.id
                }
            }).then(function(burgerCB){
                response.redirect("/");
            });



    });
};

//
// });
// });
// }




// router.get('/', function (req, res) {
// 	res.redirect('/index');
// });


// router.get('/', function(req, res) {
//     burger.all(function(data) {
//         var burgerObject = { burgers: data };
//         //console.log(hbsObject);
//         res.render('index', burgerObject);
//     });
// });


// router.post('/', function(req, res) {
//     burger.insertOne(
//         ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
//         function(result) {
//             // res.json({id:result.insertId})
//             res.redirect("/");
//         });
// });


// router.post("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({
//         devoured: req.body.devoured
//     }, condition, function(data) {
//     	console.log("redirecting");
//     });
//     res.redirect("/");
// });





// module.exports = router;