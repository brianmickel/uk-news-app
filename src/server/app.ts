import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';

import { News } from './api/v1/news';
import { TopHeadlines } from './api/v1/top_headlines';

dotenv.config();

const app = express();

const distPath = path.join(__dirname, '../../dist');
app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: distPath,
  });
});

app.get('/api/v1/news', async (req, res) => {
  const searchText = String(req.query.searchText); // TODO: fix query string handling
  const data = await News.get({ searchText });
  res.setHeader('content-type', 'application/json');
  res.set('Cache-control', 'public, max-age=10');
  res.send(data);
});

app.get('/api/v1/top-headlines', async (req, res) => {
  const data = await TopHeadlines.get();
  res.setHeader('content-type', 'application/json');
  res.set('Cache-control', 'public, max-age=10');
  res.send(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`UK News App listening on port ${port}`);
});
