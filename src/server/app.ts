import express from 'express';
import * as path from 'path';

import dotenv from 'dotenv';
dotenv.config();

import { getEverything } from './newsapi/index';

const app = express();

const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: distPath,
  });
});

app.get('/everything', async (req, res) => {
  const data = await getEverything();
  res.setHeader('content-type', 'text/plain');
  res.send(JSON.stringify(data, null, 2));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`UK News App listening on port ${port}`);
});
