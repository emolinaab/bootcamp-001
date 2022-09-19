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
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <p>{content}</p>
    </article>
  );
}

export default MainArticle;
