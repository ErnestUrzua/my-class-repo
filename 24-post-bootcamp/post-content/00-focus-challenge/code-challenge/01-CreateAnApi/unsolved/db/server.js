var express = require("express");
var app = express();
var cors = require('cors')

var PORT = process.env.PORT | 8080;


app.use(express.static("public"));

//parse the request as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


//ROUTES
require("./routes/apiRoutes.js")(app);

//require our models for sync
var db =require("./models");


// connect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/keyboards");

// start server
app.listen(PORT, () => console.log("Server listening on port: " + PORT))


