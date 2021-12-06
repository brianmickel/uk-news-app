// '/api/v1/news'
import { getEverything } from '../../newsapi/v2';

interface GetParams {
  searchText?: string;
}

type GetResponse = {};

export class News {
  public static async get(params: GetParams): Promise<GetResponse> {
    return await getEverything(params.searchText);
  }
}
