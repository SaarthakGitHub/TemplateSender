import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const PaginationBar = ({currentPage,totalPages}) => {
  return (
    <div className="pagination">
      <Navbar className="d-flex justify-content-center w-100" bg="light">
        <p>
          {" "}
          {currentPage + 1} of {totalPages}
        </p>
      </Navbar>
    </div>
  );
}

export default PaginationBar