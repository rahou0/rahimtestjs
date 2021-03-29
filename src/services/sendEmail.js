"use strict";
const nodemailer = require("nodemailer");

module.exports.sendEmail = async (email, token) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "notreplytestnode@gmail.com", // generated ethereal user
      pass: "azer2016-", // generated ethereal password
    },
  });
  console.log("token", token);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Door-dz" <notreplytestnode@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Door-dz: Activate Your New Account    ", // Subject line
    html: `
    <!DOCTYPE html>
<html>
<head>
<style>
    .container{diplay:flex;justify-content:center;flex-direction:column;
    padding: 20px 80px;background-color: #EEEEEE;text-align: center;}

    .letter{diplay:flex;justify-content:center;flex-direction:column;
    align-items:center;text-align: center;padding: 40px 40px;
    background-color: white;}

    p{width:100%;}

    .description{text-align: start;width:100%;}
    
    .bottomContainer{text-align: start;width:100%;padding:0;margin:0;}

    .button{color:white;background-color: DodgerBlue;padding:8px 10px;
    outline:none;text-decoration:none;font-weight: bold;cursor:pointer;}

    .divid{background-color: #EEEEEE;width:100%;height:1.5px;}

    .details{color:grey;font-size: 15px;}

    .link,h2{color:DodgerBlue;}
</style>
</head>
<body>
<div class='container'>
<div class='letter'>
<h2>Door-dz</h2>
<h4>Hi ${email}, You're almost there! Just confirm your email</h4>
<br>
<div class='divid'></div>
<br><br>

<div class='description'> <p>You've successfully created a Door-dz account. 
To activate it, please click below to verify your email address.
</p></div>
<br>

<br>
<a class='button' href='https://www.google.com/auth/activate/${token}' target="_blank">Activate Your Account</a>
<br>
<br>
<div class='bottomContainer'> <p>Thanks, <br>The Door-dz Team</p></div>
</div>
<p class='details'>This email was intended for rahou0, because you signed up for Door-dz. <br>The links in this email will always direct to <a class='link' href='https://door-dz.com.'>https://door-dz.com.</a>
</p>
© Door-dz International Ltd. 2021
<p>
</div>
</body>
</html>`,
  });
};
