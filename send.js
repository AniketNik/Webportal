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


// **** NODE MAILER****

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
    port: 465,
    // secure: true,
    auth: {
      user: "aniketnik47@gmail.com",
      pass: "qycjlirwvvtqapjq"
    }
});

function send_mail(to, subject, body, callback) {
  // send email
  let send_to = {
    from: "aniketnik47@gmail.com",
    to: to,
    subject: subject,
    html: body,
  };

  transporter.sendMail(send_to, function (error, info) {
    // console.log(info);
    if (error) {
      console.log(error);
    }
    console.log("Sent!");
  });
}

app.post('/sendMail',(req,res)=>{
    console.log(req.body);
    send_mail(req.body.to, req.body.subject, req.body.bod, (err, data) => {
        if(err){
            console.log(err);
            res.send({"err":err})
        }
        else{
            console.log(req.body);
            res.status(200).send({
            status: 200,
            success: true,
            message: "Sent:",
            data: "Success",
            });
        }
    });
})



app.listen(5007, function () {
    console.log('Server is running.. on Port 5007');
});


