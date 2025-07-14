const express = require('express');
const app = express();

const rootMessage = require('./rootModule');
const aboutMessage = require('./aboutModule');
const contactMessage = require('./contactModule');

const PORT = 5000;
const userName = 'John Smith';

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to my Node.js Application</h1>
    <p>${rootMessage(userName)}</p>
    <footer><small>Name: Simbillo, Royce Vincent C. | Date: July 14, 2025 | Section: WD-302</small></footer>
  `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h3>This is the About Page</h3>
    <p>${aboutMessage(userName)}</p>
    <footer><small>Name: Simbillo, Royce Vincent C. | Date: July 14, 2025 | Section: WD-302</small></footer>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <h3>This is the Contact Page</h3>
    <p>${contactMessage(userName)}</p>
    <footer><small>Name: Simbillo, Royce Vincent C. | Date: July 14, 2025 | Section: WD-302</small></footer>
  `);
});

app.get('/gallery', (req, res) => {
  res.send(`
    <h3>This is the Gallery Page</h3>
    <footer><small>Name: Simbillo, Royce Vincent C. | Date: July 14, 2025 | Section: WD-302</small></footer>
  `);
});

app.use((req, res) => {
  res.status(404).send('Invalid Request');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
