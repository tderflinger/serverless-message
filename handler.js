"use strict";

const sgMail = require("@sendgrid/mail");

function sendEmail(data) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.MESSAGE_TO,
    from: process.env.MESSAGE_FROM,
    subject: "New Message from Website",
    text: `Message from ${data.name} - ${data.email}: ${data.message}`,
    html: `<strong>Message from ${data.name} - ${data.email}: ${data.message}</strong>`
  };
  sgMail.send(msg);
}

module.exports.sendMessage = (event, context, callback) => {
  const data = JSON.parse(event.body);
  sendEmail(data);

  const response = {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    },
    body: JSON.stringify({
      message: "Message sent successfully.",
      input: event
    })
  };

  callback(null, response);
};
