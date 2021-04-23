const path = require("path");
const dotenv = require("../resetful/node_modules/dotenv");

//require("")
dotenv.config({path:path.resolve(__dirname, "../.env")});

//require("dotenv").config();

const app = require ('./toDoList');
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log('Express server listening on port' + port);
});

