// Import the Twilio module and create a REST client
const twilio = require('twilio');
const client = new twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

// Send an SMS message
client.messages.create({
    body: 'Hello from Twilio!',
    to: '+1234567890',  // Text this number
    from: '+0987654321' // From a valid Twilio number
})
.then((message) => console.log(message.sid))
.catch((error) => console.error(error));
