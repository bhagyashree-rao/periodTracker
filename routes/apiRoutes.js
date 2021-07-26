const express = require("express");
const app = express();
const connection = require("../databaseConnection/connection");
const path = require('path');
const sha256 = require('sha256');
const fs = require('fs');
const http = require('http').Server(app);
const formidable = require('formidable');
const url = require('url');
const session = require('express-session');

app.post('/v1/login',function(request,response){
	var password = request.body.password;
	var unpassword = sha256(password);
	password = unpassword.substring(4,14);
	let email = request.body.email;

	if(email!= undefined && password!= undefined){
	connection.query("select u.userID,u.userEmail,u.formFilled,p.periodLength from userdetails as u inner join menstrualdetails as p on userEmail = ? and u.userID = p.userID",[email,password],function(error,result){
		if(result.length > 0){
			request.session.loggedin = true;
			response.send(result);
		} else{
			response.status(200).send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect email or password<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');
		}
	});
	} else{
		response.status(200).send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Please enter email and password<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');
	}
});

app.post('/v1/authGoogle',function(request,response){
	connection.query("select u.userID,u.userEmail,u.formFilled,p.periodLength from userdetails as u inner join menstrualdetails as p on userEmail = ? and u.userID = p.userID",[request.body.userEmail],function(error,result){
		if(result.length > 0){
			request.session.loggedin = true;
			response.send(result);
		} else {
			response.send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect email or password<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');
		}
	});
});

app.post('/v1/register',function(request,response){
	let email = request.body.email;
	let password = request.body.password;
	let confirmPassword = request.body.confirmPassword;
	let userName = request.body.username;
	if(password === confirmPassword){
		password = sha256(password);
		password = password.substring(4,14);
		let userdetails = {
			"userEmail" : email,
			"userName" : userName,
			"userPassword" : password
		};
		if(email!= undefined && password!= undefined && userName!= undefined){
			connection.query("SELECT userEmail from userdetails where userEmail = ?",[email],function(error,result){
				if(result.length > 0){
					response.status(200).send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Already registered!Please login<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');
				} else {
					connection.query("INSERT INTO userdetails SET ?",userdetails,function(error,result){
						if(error){
							console.log(error);
						} else {
							console.log("registered successfully!");
							request.session.loggedin = true;
							request.session.formFilled = false;
							connection.query('select u.userID,u.userEmail,u.formFilled,p.periodLength from userdetails as u inner join menstrualdetails as p on userEmail = ? and u.userID = p.userID ',[email],function(error,results){
								if(error){
									console.log(error);
								} else {
									response.send(results);
								}
							});
							
						}
					});
				}
			});
		} else {
			response.status(200).send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Please fill all the details<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
		}

	} else {
		response.status(200).send('<div class="alert alert-danger alert-dismissible fade show" role="alert">Passwords do not match!<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>');
	}
});

app.post('/v1/personalDetails',function(request,response){
   connection.query("INSERT INTO menstrualdetails SET ?",request.body,function(error){
	if(error){
		console.log(error);
	} else { 
		connection.query("UPDATE userdetails SET formFilled = 1 where userID = ?",[Number(request.body.userID)],function(error){
			if(error){
				console.log(error);
			} else {
				connection.query("INSERT INTO menstruallog SET ?",[request.body,userID,request.body.lastDate,request.body.periodLength],function(error){
					if(error){
						console.log(error);
					} else {
						response.send(request.body.periodLength);
					}
				});
				
			}
		});
	}
   });
});

app.post('/v1/showPredictedDate',function(request,response){
	console.log(request.body.userID);
	connection.query("SELECT * from menstruallog where userID = ? and logID = (SELECT MAX(logID) FROM menstruallog)",[request.body.userID],function(error,result){
		if(error){
			console.log(error);
		} else {
			response.send(result);
		}
	});
});

app.post('/v1/insertLatestLog',function(request,response){
	connection.query("SELECT periodLength from menstrualdetails where userID = ?",[request.body.userID],function(error,result){
		if(error){
			console.log(error);
		} else {
			let insertData = {
				"userID" : request.body.userID,
				"lastDate" : request.body.lastDate,
				"periodLength": result[0].periodLength
			};
			connection.query("INSERT INTO menstruallog SET ?",insertData,function(error){
				if(error){
					console.log(error);
				} else {
					console.log("inserted log successfully");
					response.send([insertData]);
				}
			});
		}
	});
});

app.post('/v1/previousLogs',function(request,response){
	connection.query("SELECT * from menstruallog where userID = ?",[request.body.userID],function(error,result){
		if(error){
			console.log(error);
		} else {
			response.send(result);
		}
	});
});

app.post('/v1/updatePassword',function(request,response){
	console.log(request.body.userID);
	connection.query("SELECT userPassword from userdetails where userID = ?",[request.body.userID],function(error,result){
		if(result[0].userPassword == sha256(request.body.currentPassword).substring(4,14)){
			let updatedPassword = sha256(request.body.newPassword).substring(4,14);
			connection.query("UPDATE userdetails SET userPassword = ?",[updatedPassword],function(error){
				if(error){
					console.log(error);
				} else {
					console.log("updated successfully");
					response.send("success");
				}
			});
		} else {
			console.log("incorrect password.");
			response.send('<div class="alert alert-danger alert-dismissible fade show" role="alert">current passwprd does not match!<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button></div>')
		}
	});
})

app.get('/v1/tips',function(request,response){
	connection.query("SELECT tip from tipsoftheday",function(error,result){
		if(error){
			console.log(error);
		} else {
			response.send(result);
		}
	});
});

app.get('/v1/articles',function(request,response){
	connection.query('SELECT articleTitle,articleText from articles',function(error,result){
		if(error){
			console.log(error);
		} else {
			response.send(result);
		}
	});
});

module.exports = app;