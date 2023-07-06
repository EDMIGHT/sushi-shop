import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';

import styles from './Profile.module.scss';

const ProfileHeader: FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    navigate('/');
  }

  return (
    <div className={styles.header}>
      <h2> Привіт 👋, {user?.name}</h2>
    </div>
  );
};

export default ProfileHeader;
