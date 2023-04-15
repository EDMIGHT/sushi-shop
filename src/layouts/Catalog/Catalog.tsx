import React from 'react';

import Pagination from '../../components/Pagination/Pagination';
import type { SortOption } from '../../components/Sort/Sort';
import SushiList from '../../components/SushiList/SushiList';
import type { HomeProps } from '../../pages/Home';
import type { ICategory, Sushi } from '../../types';
import styles from './Catalog.module.scss';

interface CatalogProps extends Pick<HomeProps, 'searchValue'> {
  sushi: Sushi[];
  setSushi: React.Dispatch<React.SetStateAction<Sushi[]>>;
  activeCategory: ICategory;
  selectedSort: SortOption;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Catalog = ({
  sushi,
  setSushi,
  activeCategory,
  selectedSort,
  searchValue,
  currentPage,
  setCurrentPage,
}: CatalogProps) => {
  return (
    <div className={styles.wrapper}>
      <SushiList
        currentPage={currentPage}
        searchValue={searchValue}
        sushi={sushi}
        setSushi={setSushi}
        activeCategory={activeCategory}
        selectedSort={selectedSort}
      />
      <Pagination onChangePage={(page: number) => setCurrentPage(page)} />
    </div>
  );
};

export default Catalog;
