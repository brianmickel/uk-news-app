import React from 'react';

import { getNews } from '../api';
import * as models from '../models';
import { SearchBox } from './search_box';
import { ArticleList } from './article_list';

interface State {
  searchText: string;
  articles: models.ArticleData[];
}
export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchText: '',
      articles: [],
    };
  }

  async updateArticles() {
    const articles = await getNews(this.state.searchText);
    this.setState({ articles });
  }

  render() {
    const { searchText, articles } = this.state;
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">UK News App</h1>
          <h2 className="subtitle">Latest news from the United Kingdom</h2>
          <div className="level-left">
            <SearchBox
              value={searchText}
              onUpdateSearchText={(value: string) => {
                console.log(`app: ${value}`);
                this.setState({ searchText: value });
                this.updateArticles();
              }}
            />
          </div>
          <div className="level">
            <ArticleList articles={articles} />
          </div>
        </div>
      </div>
    );
  }
}
