//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');
//==================================================================================================

//connection variable to mysql database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon_db'
});
//==================================================================================================

//connection to mysql and run function to read table of products
connection.connect(function(err){
	if(err) throw err;
	// console.log('connected as id ' + connection.threadId);
	readTable();
});

//==================================================================================================
//functions

//function to read table
function readTable(){
	//connects to mysql and selects all from the table products
	connection.query("SELECT * FROM products", function(err, res) {
	//if there is an error,  throw error	
    if (err) throw err;
    //displaying table of results from connection in console
    console.table(res);
    //fun function to ask user questions
	askQuestion();
  });
}

//functions to ask user questions
function askQuestion(){
	inquirer
    .prompt([
	    	{
		      name: "id",
		      type: "input",
		      message: "What is the ID of the product you would like to buy?",
		      //validate that the user entered a number
		      validate: function(value) {
		      	  //if user did enter a valid number, return true
		          if (isNaN(value) === false) {
		            return true;
		          }
		          //else, return false and prompt user to enter a valid number
		          console.log("Please enter a valid number.");
		          return false;
		    	  }
	    	},
	    	{
		      name: "quantity",
		      type: "input",
		      message: "How many of the product would you like to buy?",
		      //validate that the user entered a number
		      validate: function(value) {
		      	  //if user did enter a valid number, return true
		          if (isNaN(value) === false) {
		            return true;
		          }
		          //else, return false and prompt user to enter a valid number
		          console.log("Please enter a valid number.");
		          return false;
		    	  }
	    	}
    	])
    .then(function(answer) {
    	//connect to mysql and select the stock quantity column from products table and concatenate with the user answer
		connection.query('SELECT stock_quantity FROM products WHERE item_id ="'+ answer.id +'"', function(err, results) {
		//if error, throw error
	    if (err) throw err;
	    	//track the purchase and alert user
			if (answer.quantity <= results[0].stock_quantity){
				console.log('Awesome, thank you for supporting small businesses!');
				//new variable to update the stock quantity
				var newStockQuantity = results[0].stock_quantity - answer.quantity;
				//connection to mysql again to update the stock quantity
				connection.query("UPDATE products SET ? WHERE ?", [
		     		{
		         		stock_quantity: newStockQuantity
		     		}, 
		     		{
		         		item_id: answer.id
		     		}],function(err, res) {}); 
				console.log('Inventory updated!');
				connection.end();
			}
			//if the quantity desired by the user is greater than the stock quantity, alert user
			else {
				console.log('Insufficient quantity, please try again');
				connection.end();
			}
	  	});
    })
};