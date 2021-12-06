import React from 'react';

import * as models from '../models';
import { ArticleCard } from './article_card';

interface Props {
  articles: models.ArticleData[];
}

interface State {
  value?: string;
  pending: boolean;
}

export class ArticleList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: undefined,
      pending: false,
    };
  }

  render() {
    const { pending } = this.state;
    if (pending) {
      return (
        <div className="container">
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        </div>
      );
    }
    const { articles } = this.props;
    if (articles.length === 0) {
      return <div className="container">No results, modify search term</div>;
    }
    const styles = {
      display: 'flex',
      flexWrap: 'wrap' as any,
    };
    return (
      <div className="container" style={styles}>
        {articles.map((a: models.ArticleData) => (
          <ArticleCard article={a} />
        ))}
      </div>
    );
  }
}
