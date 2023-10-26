import "./ResultsView.css";
import ProgramItem from "./ProgramItem";
import { useState, useEffect } from "react";
function ResultsView({ programs, onViewProgram, onShowMore, showBtn,pgs }) {
  // const [currentPage, setCurrentPage] = useState(cPage);
  
  // let pgs = programs.length > 0 ? programs.slice(0, cPage) : [];
  // console.log(programs.length);
  //const [results, setResults] = useState(pgs);
  //const [showBtn, setShowBtn] = useState(programs.length >= currentPage);
  //let showBtn = programs.length >= cPage
  //console.log(results.length)
  // const onShowMore = () => {
  //   if (programs.length >= currentPage) {
  //     let totalCount = currentPage + 10;
  //     setCurrentPage(totalCount);
  //     //setResults(programs.slice(0, currentPage));
  //     pgs = programs.slice(0, currentPage);
  //     if(programs.length< totalCount){
  //      // setShowBtn(false);
  //          showBtn = false;
  //     }
  //   }
  // };
  return (
    <div className="results-view">
      <div className="inline-header">{programs.length} Results</div>
      <hr />
      <div className="results-body-view">
        {pgs.length > 0 ? (
          <div>
            <div>
              {pgs.map(function (item, i) {
                return (
                  <ProgramItem item={item} onViewProgram={onViewProgram} />
                );
              })}
            </div>
            {showBtn ? (
              <div className="showmore-cls">
                <div className="showmore-label" onClick={onShowMore}>
                  Show more...
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="no-info-cls">No programs available</div>
        )}
      </div>
    </div>
  );
}

export default ResultsView;
