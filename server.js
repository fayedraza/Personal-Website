const express = require('express')
const cors = require('cors')
const app = express()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')




app.use(cors());


app.get("/", function(req,res){
  res.send("hello world")
});



app.get("/sendemail", function(req,res){
 
  
  const {subject, message, email, name } =  req.query;

  const msg = {
    to: 'fayedrazacs@gmail.com', 
    from: 'fayedrazacs@gmail.com', 
    subject: name + " - " + subject,
    text: message + "\n\n Email: " + email
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    
});
 
const port = process.env.PORT || 8082;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});