import "./ResultsView.css";
import ProgramItem from "./ProgramItemB";
import { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
function ResultsViewB({ programs, handlePageClick, itemOffset, pageNo, 
  onViewProgram, onClearAll, onApplySearch}) {
  
  //  const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 10;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = programs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(programs.length / 10);

  // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * 10) % programs.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  
  return (
    <div className="results-view">
      <div className="inline-header">
        <div>{programs.length} Results</div>
        {/* <div className="mob-btn-cnt">
           <div className='fb-clearall' onClick={onClearAll} >Reset Filters</div>
           <div className='fb-applyall'  onClick={onApplySearch}>Apply Filters</div>
        </div> */}
      </div>
      <hr />
      <div className="results-body-view">
        {programs.length > 0 ? (
          <div>
            <div>
              {
                currentItems.map(function (item, i) {
                  return <ProgramItem item={item} onViewProgram={onViewProgram} />;
                })
              }
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
              className="pageClass"
              activeLinkClassName="page-active"
              previousLinkClassName="pageleft"
              nextLinkClassName="pageright"
              disabledClassName="pgbuttondisable"
              forcePage={pageNo}
            />
          </div>


        ) : (
          <div className="no-info-cls">No programs available</div>
        )}
      </div>
    </div>
  );
}

export default ResultsViewB;
