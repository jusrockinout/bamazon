var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
 })

connection.connect(function(err){
	if (err) throw (err);
	console.log("connection successful!");
	makeTable();
})

var makeTable = function(){
	connection.query("SELECT * FROM products", function(err,res){
		for(var i=0; i<res.length; i++){
			console.log(res[i].itemId+" || "+res[i].productName+" || "+
				res[i].departmentName+" || "+res[i].price+" || "+res[i].stockQuantity+"\n");
		}
	promptCustomer(res);
	})
}

var promptCustomer = function(res){
	inquirer.prompt([{
		type:"input",
		name:"choice",
		message:"What would you like to purchase?"
	}]).then(function(answer){
		var correct = false;
		for(var i=0;i<res.length;i++){
			if(res[i].productName==answer.choice){
				correct = true;
				var product=answer.choice;
				var id=i;
				inquirer.prompt({
					type:"input",
					name:"amount",
					message:"How many would you like to purchase?",
				}).then(function(answer){
					if((res[id].stockQuantity-answer.amount)>0){
						connection.query("UPDATE products SET stockQuantity="+(res[id].stockQuantity-answer.amount)+"' WHERE productName='"+product+"'", function(err,res2){
							console.log("Item Purchased!");
							makeTable();
						})					
					} else {
						console.log("Unavailable!");
						promptCustomer(res);
					}
				})
			}
		}
	})
}