import React from 'react';
import { Link } from 'react-router-dom';

import emptyBox from '@/assets/img/emptyBox.png';

import styles from './SushiDescription.module.scss';

const SushiDescError: React.FC = () => {
  return (
    <div className={styles.errorWrapper}>
      <img src={emptyBox} alt='empty' />
      <h2>Выбранная суши не существует 😥</h2>
      <Link to='/'>
        <button>вернуться назад</button>
      </Link>
    </div>
  );
};

export default SushiDescError;
