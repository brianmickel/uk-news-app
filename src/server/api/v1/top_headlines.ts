// '/api/v1/top_headlines'
import { getTopHeadlines } from '../../newsapi/v2';

type GetResponse = {};

export class TopHeadlines {
  public static async get(): Promise<GetResponse> {
    return await getTopHeadlines('gb');
  }
}
