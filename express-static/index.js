const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');
console.log(absolutePath);

const expressStatic = express.static(absolutePath);
console.log(expressStatic);
app.use(expressStatic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
