import axios from 'axios';

export async function getEverything() {
  const url = 'https://newsapi.org/v2/everything';
  const params = {
    q: 'tesla',
    from: '2021-11-06',
    sortBy: 'publishedAt',
    apiKey: process.env.NEWSAPI_API_KEY,
  };
  const response = await axios.get(url, { params });
  return response.data;
}
