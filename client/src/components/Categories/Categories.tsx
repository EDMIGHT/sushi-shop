import { useWhyDidYouUpdate } from 'ahooks';
import React from 'react';

import { useGetAllCategoriesQuery } from '../../store/api/categories.api';
import type { ICategory } from '../../types';
import { convertCategoryId } from '../../utils/helpers/convertCategoryId';
import styles from './Categories.module.scss';
import Category from './Category';

export interface CategoriesProps {
  activeCategory: ICategory;
  onClickCategory: (category: ICategory) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ activeCategory, onClickCategory }) => {
    const { isLoading, isError, isSuccess, data } = useGetAllCategoriesQuery(null);

    const categoriesElements = data
      ? data.map((categoryFromServer) => {
          const { id, name } = convertCategoryId(categoryFromServer);
          return (
            <Category
              key={id}
              title={name}
              className={activeCategory.id === id ? styles.active : ''}
              onClick={() => onClickCategory({ id, name })}
            />
          );
        })
      : [];

    const loading = isLoading && <div>загрузка</div>;
    const error = isError && <div>не удалось получить остальные категории 😱</div>;
    const success = isSuccess && categoriesElements;

    const content = !isLoading && (
      <ul className={styles.list}>
        <Category
          key={0}
          title='все'
          className={activeCategory.id === '0' ? styles.active : ''}
          onClick={() => onClickCategory({ id: '0', name: 'все' })}
        />
        {error}
        {success}
      </ul>
    );

    return (
      <>
        {loading}
        {content}
      </>
    );
  }
);

Categories.displayName = 'Categories';

export default Categories;