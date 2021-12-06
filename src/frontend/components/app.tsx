import * as React from 'react';

import { SearchBox } from './search_box';
import { ArticleList } from './article_list';

interface State {
  searchText: string;
}
export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">UK News App</h1>
          <h2 className="subtitle">Latest news from the United Kingdom</h2>
          <div className="level-left">
            <SearchBox
              value={searchText}
              onUpdateSearchText={(value: string) => {
                this.setState({ searchText: value });
              }}
            />
          </div>
          <div className="level">
            <ArticleList />
          </div>
        </div>
      </div>
    );
  }
}
