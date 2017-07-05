var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var PORT = 3000;


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!vegotB1gballs',
    database: 'xxl'


});


connection.connect(function(error) {

    if (error) {
        throw error;
    }

    console.log("Connected to MySQL server, as ID = ", connection.threadId);
    var search = "";
    connection.query("SELECT * FROM `artists` WHERE ?", [search],
        function (queryError, response) {
            if (queryError) {
                throw queryError;
            }
            console.log(response);
            response.forEach(function (row) {
                console.log("response from MySQL server", row, 'id', row.id)
            });

        }
    );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.get('/artists',function(req, res) {
    res
});

app.get('/songs', function(req, res) {
    res
});

app.get('/label:lab', function(req, res) {
    res
});