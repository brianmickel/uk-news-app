import axios from 'axios';

import * as models from './models';

export async function getNews(
  searchText: string
): Promise<models.ArticleData[]> {
  console.log('getnews');
  const params = { searchText };
  const response = await axios.get('api/v1/news', { params });
  return response.data.articles;
}
