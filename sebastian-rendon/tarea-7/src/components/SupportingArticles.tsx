import React from 'react';
import styles from '../styles/SupportingArticles.module.css';

type Props = {
  articles: string[];
};

function SupportingArticles({ articles }: Props) {
  return (
    <aside className={styles['aside__supporting-articles']}>
      {articles.map((article) => (
        <h1 key={article} className={styles['title__supporting-article']}>
          {article}
        </h1>
      ))}
    </aside>
  );
}

export default SupportingArticles;
