function sendEmail() {
  Email.send({
    SecureToken: 'f073faef-24d5-4a84-b1d5-9565c25fb3bb',
    To: 'slarsen3023@gmail.com',
    From: 'slarsen-3@att.net',
    Subject: 'Test',
    Body: 'This is a test. Is it working? Added credentials to a secure token, and removed dotenv',
  }).then((message) => alert(message));
}
