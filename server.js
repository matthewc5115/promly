const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/create-file', (req, res) => {
  const { filename, content } = req.body;
  const filePath = path.join(__dirname, filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing file');
    } else {
      res.send('File created');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
