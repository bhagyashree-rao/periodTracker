let mysql = require("mysql");

var db_config = {
	host     : 'localhost',
	user     : 'root',
	password : 'veenuy2k',
	database : 'spot'
};
var connection = mysql.createPool(db_config);
connection.getConnection(function(err){
	if(err){
		console.log('cannot establish a connection with mysql database..\n');
		connection = reconnect(connection);
	}
	else{
		console.log('\n**new connection established with the mysql database**\n');
	}
});

function reconnect(connection){
	console.log('\n**new connection tentative...**\n');
	connection = mysql.createPool(db_config);

	connection.getConnection(function(err){
		if(err){
			setTimeout(reconnect(connection),2000);
		}
		else{
			console.log('\n**new connection established with the database**\n');
			return connection;
		}
	});
}

module.exports = connection;
