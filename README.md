# serverless-message

This is the example application for my blog article.

It uses the Serverless framework to build a serverless function. The function
sends an email to the configured email address with the customer contact information.

The application uses Twilio Sendgrid for sending the email.

## Install

Install according to the Serverless installation instructions:

* https://serverless.com/framework/docs/getting-started/

Then run after cloning this repository:

```bash
npm install
```

## Offline Testing

Run:

```bash
sls offline
```

## Deploy

Run:

```bash
sls deploy
```

Note, after deploying there are costs associated with invoking the function depending on cloud provider. 

## Remove

```bash
sls remove
```

## Notice

If internal server error occurs, run before deploy:

```bash
chmod -R +r node_modules/
```