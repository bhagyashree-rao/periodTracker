let express = require("express");
const session = require('express-session');
let apiRoutes = require("./routes/apiRoutes");		//Two different instances
let htmlRoutes = require("./routes/htmlRoutes");	//of router are returned and stored 

let app = express();
let PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(apiRoutes);
app.use(htmlRoutes);
  
app.listen(PORT, function() {
    console.log("Server running on PORT: " + PORT);
});
