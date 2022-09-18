import React from 'react';
import styles from '../styles/MainArticle.module.css';

type Props = {
  heading: string;
  subheading: string;
  content: string;
};

function MainArticle({ heading, subheading, content }: Props) {
  return (
    <article className={styles['article__main-article']}>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p>{content}</p>
    </article>
  );
}

export default MainArticle;
