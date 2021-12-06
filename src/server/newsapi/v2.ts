import axios from 'axios';

// TODO: evaluate unofficial Node.js client library
//   https://newsapi.org/docs/client-libraries/node-js

// format: YYYY-MM-DD
// TODO: fix MM, DD
function today(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

interface NewsApiEverythingParams {
  apiKey: string;
  from?: string;
  sortBy?: string;
  q?: string;
}

export async function getEverything(searchText?: string): Promise<{}> {
  const url = 'https://newsapi.org/v2/everything';
  const params: NewsApiEverythingParams = {
    from: today(),
    sortBy: 'publishedAt',
    apiKey: process.env.NEWSAPI_API_KEY || '',
  };

  if (searchText) {
    params.q = searchText;
  }

  const response = await axios.get(url, { params });
  if (response.status !== 200) {
    console.log(response.data);
    return { error: 'newsapi error' }; // TODO: fix handling of third-party errors
  }
  return response.data;
}
