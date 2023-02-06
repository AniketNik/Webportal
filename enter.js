const express = require('express');
const fs = require('fs')
const { Client } = require('pg');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer')
const { Z_DEFAULT_STRATEGY } = require('zlib');
var bodyParser = require("body-parser");



const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/Users';
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors({origin:'*'}))


// ****ENTERING THE DATA INTO DATABASE

app.post('/update', function (req, res) {
    client.query(`Insert into Newusers values('${req.body.name}','${req.body.email}','${req.body.contact}','${req.body.services}');`, function (err, result) {
        if (err) {
            console.log(err); 
            res.status(400).send(err);
        }
        else{
            res.status(200).send({message:result.rows});
        }
        
    });
});


app.listen(5006, function () {
    console.log('Server is running.. on Port 5006');
});


