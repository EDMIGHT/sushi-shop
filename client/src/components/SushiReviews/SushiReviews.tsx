import { FC } from 'react';

import { ISushiReview } from '@/types/sushi.types';

import SushiReview from './SushiReview';
import styles from './SushiReview.module.scss';

interface ISushiReviewsProps {
  reviews: ISushiReview[];
}

const SushiReviews: FC<ISushiReviewsProps> = ({ reviews }) => {
  const reviewsElement = reviews.map((review) => (
    <SushiReview key={review.userId._id} {...review} />
  ));

  return (
    <div className={styles.wrapper}>
      <h2>Відгуки: </h2>
      {reviews.length > 0 ? (
        <ul className={styles.list}>{reviewsElement}</ul>
      ) : (
        <p className={styles.emptyMessage}>Ти можеш стати першим, хто оцінив 😎</p>
      )}
    </div>
  );
};

export default SushiReviews;
