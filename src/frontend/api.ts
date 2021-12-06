import axios from 'axios';

import * as models from './models';

export async function getNews(
  searchText: string
): Promise<models.ArticleData[]> {
  const params = { searchText };
  const response = await axios.get('api/v1/news', { params });
  return response.data.articles;
}

export async function getTopHeadlines(): Promise<models.ArticleData[]> {
  const response = await axios.get('api/v1/top-headlines');
  return response.data.articles;
}
