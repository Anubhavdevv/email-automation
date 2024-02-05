const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const sendinblue = require('./api/sendinblue');


dotenv.config();

const dev = process.env.NODE_ENV == "development";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    
    server.use(bodyParser.json()).post('/api/email', (req, res) => {
      const { msg = '' } = req.body; //We will use this later
      let sendSmtpEmail = {
        to: [{
            email: 'guptaanubhav907@gmail.com' //TODO: Change this on production.
        }],
        templateId: 1,
        params: {
          name: 'Malith',
          subject: 'Someone sent you a link',
          text: msg,
      },
      };
      sendinblue(sendSmtpEmail)
      console.log(res);
      res.send('success');
      console.log(res);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });