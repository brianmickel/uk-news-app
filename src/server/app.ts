import express from 'express';
import * as path from 'path';

const app = express();

const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: distPath,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`UK News App listening on port ${port}`);
});
