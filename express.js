import express from 'express';
import multer from 'multer';

// File Path Stuff
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).fields([{ name: 'file', maxCount: 1 }]);

// Open form on index (/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/uploadForm.html'));
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    // Check if successful. It returns so it ends the function
    if (err) return res.status(400).send('Error uploading file');

    // Access the text field
    const username = req.body.username;

    // Access the uploaded file
    const uploadedFile = req.files['file'][0];

    console.log(`Username: ${username}`);
    console.log(`File path: ${uploadedFile.path}`);
    res.end('File and form data uploaded successfully!');
  });
});

var server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Server running at http://%s:%s/", host, port);
});
