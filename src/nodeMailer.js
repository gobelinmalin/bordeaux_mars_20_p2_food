let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

let transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: process.env.NODE_ENV_USER,
    pass: process.env.NODE_ENV_PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {

    const { name, email, message, phone, subject } = req.body;

    let content = `name: ${name}
                \n email: ${email}
                \n phone number: ${phone}
                \n subject: ${subject}
                \n message: ${message} `
    

  let mail = {
    from: name,
    to: 'contactinmyfridge@gmail.com',  // Change to email address that you want to receive messages on
    subject: "New Message from InMyFridge's contact page",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(404).json({
        status: 'fail'
      })
    } else {
      res.status(200).json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)