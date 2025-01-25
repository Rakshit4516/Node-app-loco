const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js application running on Kubernetes.');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
