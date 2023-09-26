"use client";

import { useEffect, useState } from "react";
import * as SC from "./Pagination.styles";

type Props = {
  nextPage?: string | null;
  prevPage?: string | null;
};

const Pagination: React.FC<Props> = ({ nextPage, prevPage }) => {
  const [statusPagination, setStatusPagination] = useState({
    next: nextPage,
    prev: prevPage,
  });

  const isDisabledPrevButton = statusPagination.prev === null ? true : false;
  const isDisabledNextButton = statusPagination.next === null ? true : false;

  const handlePrevPage = () => {
    console.log(statusPagination.prev);
  };

  const handleNextPage = () => {
    console.log(statusPagination.next);
  };

  useEffect(() => {
    setStatusPagination({ next: nextPage, prev: prevPage });
  }, [nextPage, prevPage]);

  return (
    <SC.Wrapper>
      <SC.Button
        onClick={handlePrevPage}
        disabled={isDisabledPrevButton}
        $isDisabled={isDisabledPrevButton}
      >
        {"<"}
      </SC.Button>

      <SC.Button
        onClick={handleNextPage}
        disabled={isDisabledNextButton}
        $isDisabled={isDisabledNextButton}
      >
        {">"}
      </SC.Button>
    </SC.Wrapper>
  );
};

export default Pagination;
