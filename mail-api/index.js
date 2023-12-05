
const express = require("express");
var cors = require("cors");

const corsOptions = {
    origin: '*'
}

const app = express();

const port = 8080;

app.use(express.json());

// app.use(cors(corsOptions))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://web-portfolio-flk3.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',(req,res)=>{
    res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: green; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
  })

app.listen(port, () => {
    console.log("Server running on port 8080");
});



var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    auth: {
        user: "griend.gamer@zohomail.com", //
        pass: "MusicIsLife@44", //
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email server ready to send email");
    }
});
app.post("/", (req, res) => {
    const { cell, name, email, message } = req.body;

    emailDetails = {
        from: "griend.gamer@zohomail.com",
        to: "kagisoboasmonageng@gmail.com", //where the email is to
        subject: "From Portfolio Web", //email subject
        html: "<h1>Hello! Kagiso</h1><p>This email was sent from your web portfolio site.</p><p>Name: " + name + "<br>Email: " + email + "<br>Cell: " + cell + "<br>Message: " + message + "</p>        ", //email
    };

    transporter.sendMail(emailDetails, (emailErr) => {
        if (emailErr) {
            console.log(emailErr)
            res.status(400).json({
                message: "Error sending email"
            })
        } else {

            emailDetails = {
                from: "griend.gamer@zohomail.com",
                to: email, //where the email is to
                subject: "Kagiso Web Portfolio", //email subject
                html: "<h1>Hello "+name+"</h1><p>This email was sent from Kagiso's web portfolio site.</p><p>Name: " + name + "<br>Email: " + email + "<br>Cell: " + cell + "<br>Message: " + message + "</p>        ", //email
            };

            transporter.sendMail(emailDetails, (emailErr) => {
                if (emailErr) {
                    console.log(emailErr)
                    res.status(400).json({
                        message: "Error sending email"
                    })
                } else {
                    res.status(200).json({
                        message: "Mail sent successfully",
                    });
                }
            })

        }
    })




})