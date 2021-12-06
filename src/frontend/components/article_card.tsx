import React from 'react';

import * as models from '../models';

interface Props {
  article: models.ArticleData;
}

export const ArticleCard = (props: Props) => {
  const { name, title, url } = props.article;
  const styles = {
    width: '300px',
    margin: '10px',
  };
  return (
    <div className="card" style={styles}>
      <div className="card-content">
        <p className="title is-6">{title}</p>
        <p className="subtitle is-6">{name}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <a href={url}>Go to article</a>
        </p>
      </footer>
    </div>
  );
};
