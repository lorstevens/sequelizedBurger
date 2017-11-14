

// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
    var Burger  = sequelize.define("burgers", {
        burger_name : DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        }
        
        
    });

    return Burger;
};




// var orm = require("../config/orm.js");

// var burger = {
// 	all: function(cb){
// 		orm.all("burgers", function(results){ //does burger reference the burgers table?
// 			cb(results);
// 		});
// 	}, 


//     insertOne: function(cols, vals, cb){
//     orm.insertOne('burgers', cols, vals, function(results){
//       cb(results);
//     });
//   },



//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(results) {
//       cb(results);
//     });
//   }
// };



// // Export the database functions for the controller (catsController.js).
// module.exports = burger;