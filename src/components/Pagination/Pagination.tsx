"use client";

import { useEffect, useState } from "react";
import * as SC from "./Pagination.styles";
import { useDispatch } from "react-redux";
import { setPaginationUrl } from "@/reducers/paginationReducer";

type Props = {
  nextPage?: string | null;
  prevPage?: string | null;
};

const Pagination: React.FC<Props> = ({ nextPage, prevPage }) => {
  const dispatch = useDispatch();

  const [statusPagination, setStatusPagination] = useState({
    next: nextPage,
    prev: prevPage,
  });

  const isDisabledPrevButton = statusPagination.prev === null ? true : false;
  const isDisabledNextButton = statusPagination.next === null ? true : false;

  const handlePrevPage = () => {
    if (statusPagination.prev)
      dispatch(setPaginationUrl(statusPagination.prev));
  };

  const handleNextPage = () => {
    if (statusPagination.next)
      dispatch(setPaginationUrl(statusPagination.next));
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
