// index.js
const app = require('./app');
const port = 5000;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});