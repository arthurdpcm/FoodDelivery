import React from 'react';

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsCount, pageSize, currentPage, totalPages, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <nav className='flex justify-center my-8'>
      <ul className="flex gap-4 items-center ">
        <li>
          <button className={`${isFirstPage ? "text-blue-800 opacity-35" :null}`}
           disabled={isFirstPage} onClick={()=>onPageChange(currentPage-1 )}> &lt; </button>
        </li>
        {pages.map(page => (
          <li key={page} className={page === currentPage ? ' p-3 rounded-md bg-zinc-300' : ' p-3'}>
            <button className="" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li>
          <button className={`${isLastPage ? "text-blue-800 opacity-35" :null}`}
           disabled={isLastPage} onClick={()=>onPageChange(currentPage+1 )}> &gt; </button>
          
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;