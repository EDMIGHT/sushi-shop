import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

interface PaginationProps {
  onChangePage: (page: number) => void;
}

const Pagination = ({ onChangePage }: PaginationProps) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2} // с бэка нужно, но нет такой возможности
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
