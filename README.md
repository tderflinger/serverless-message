# serverless-message

This is the example application for my blog article. You can find the article here:

- https://www.tderflinger.com/en/serverless-website-messaging

It uses the Serverless framework to build a serverless function. The function
sends an email to the configured email address with the customer contact information.

The application uses Twilio Sendgrid for sending the email.

## Install

Install according to the Serverless installation instructions:

- https://serverless.com/framework/docs/getting-started/

Then run after cloning this repository:

```bash
npm install
```

Set the environmental variables in _serverless.yml_ according to your values.

For example:

```
export SENDGRID_API_KEY=xxxx
export MESSAGE_TO=your@x.com
export MESSAGE_FROM=website@yourwebsite.com
```

You can get your Sendgrid API key by signing up at: https://sendgrid.com/

## Offline Testing

```bash
sls offline
```

## Deploy

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

## License

MIT
