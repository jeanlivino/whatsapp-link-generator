const express = require('express');
const device = require('express-device');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('dist'));
app.use(device.capture());

// generate link
const generateLink = (req) => {
  const { p, m } = req.query;
  const deviceType = req.device.type;
  if (deviceType === 'desktop') {
    return `https://web.whatsapp.com/send?phone=${p}&text=${m}`;
  }
  return `whatsapp://send?phone=${p}&text=${m}`;
};

app.get('/go', (req, res) => {
  res.redirect(generateLink(req));
});
app.listen(port, () => console.log('Listening on port 8080!'));
