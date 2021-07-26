const express = require('express');
const app = express();
const path = require('path');

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/bsNavbarPT.html'));
});

app.get('/login1.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/login1.html'));
});
app.get('/bsNavbarPT.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/bsNavbarPT.html'));
});
app.get('/getStarted.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/getStarted.html'));
});
app.get('/register.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/register.html'));
});
app.get('/personalDetails.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/personalDetails.html'));
});

app.get('/calendarLea.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/calendarLea.html'));
});

app.get('/logData.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/logData.html'));
});

app.get('/homePage.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/homePage.html'));
});

app.get('/setting.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/setting.html'));
});

app.get('/articles.html',function(req,res){
	res.sendFile(path.join(__dirname,'../public'+'/articles.html'));
});


module.exports = app;