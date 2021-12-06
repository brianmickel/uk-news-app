import * as React from 'react';

import { ArticleCard } from './article_card';

interface Props {}

interface State {
  value?: string;
  pending: boolean;
}

interface ArticleData {
  title: string;
  name: string;
  url: string;
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
    const articles: ArticleData[] = [];
    return (
      <div className="container">
        {articles.map((a: ArticleData) => (
          <ArticleCard article={a} />
        ))}
      </div>
    );
  }
}
