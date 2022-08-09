// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = "63f2c955a24de53cb5fb55bb777bce3f";
const client = require("twilio")(accountSid, authToken);

console.log(
  "Your environment variable TWILIO_ACCOUNT_SID has the value: ",
  process.env.TWILIO_ACCOUNT_SID
);
client.messages
  .create({
    body: "Hi Jennie, hope you enjoy Singapore!",
    from: "+12029726738",
    to: "+447798834121",
  })
  .then((message) => console.log(message.sid));
