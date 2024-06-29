import React from 'react'
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit'

export default function Pagination({ startPage, currentPage, total, onPageChange }) {
  return (
    <nav aria-label="pagination">
      <MDBPagination className="mb-0">
        <MDBPaginationItem disabled={currentPage === 1}>
          <MDBPaginationLink
            // href={`/news${currentPage - 1 !== 0 ? `/?page=${currentPage - 1}` : ''}`}
            tabIndex={currentPage === 1 ? -1 : undefined}
            aria-disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>

        <MDBPaginationItem active={startPage === currentPage}>
          <MDBPaginationLink onClick={() => onPageChange(startPage)}>{startPage}</MDBPaginationLink>
        </MDBPaginationItem>

        <MDBPaginationItem active={startPage + 1 === currentPage}>
          <MDBPaginationLink onClick={() => onPageChange(startPage + 1)}>
            {startPage + 1}
          </MDBPaginationLink>
        </MDBPaginationItem>

        <MDBPaginationItem
          active={startPage + 2 === currentPage}
          disabled={startPage + 2 !== currentPage && currentPage >= total}
        >
          <MDBPaginationLink onClick={() => onPageChange(startPage + 2)}>
            {startPage + 2}
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem disabled={currentPage >= total}>
          <MDBPaginationLink
            tabIndex={currentPage === total ? -1 : undefined}
            aria-disabled={currentPage === total}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  )
}
