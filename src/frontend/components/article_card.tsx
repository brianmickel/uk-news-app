import * as React from 'react';

interface ArticleData {
  title: string;
  name: string;
  url: string;
}

interface Props {
  article: ArticleData;
}

export const ArticleCard = (props: Props) => {
  const { name, title, url } = props.article;
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="subtitle">{name}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <a href={url}>Go to article</a>
        </p>
      </footer>
    </div>
  );
};
