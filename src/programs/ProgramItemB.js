import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faClock,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import calendarIcon from "../images/calendar.png";
import laptopIcon from "../images/laptop.png";
import bookIcon from "../images/book.png";

function ProgramItemB({ item, onViewProgram }) {
  const [btnText, setBtnText] = useState("Program Details");
  const [moreIcon, setMoreIcon] = useState(faAngleDown);
  const showMore = (e) => {
    if (moreIcon === faAngleDown) {
      setMoreIcon(faAngleUp);
    } else {
      setMoreIcon(faAngleDown);
    }
  };
  return (
    <div>
      {item.featured ? (
        <div className="featured-cls">FEATURED PROGRAM</div>
      ) : (
        <div className="nofeature"></div>
      )}
      <div className="program-item-b" key={item.programId}>
        <div className="title-flex-display">
          <div className="title-container">
            <div
              className="tile-title-b"
              onClick={onViewProgram}
              program={item.programName}
            >
              {item.programName}
            </div>
            <div className="tile-subtitle">{item.programType}</div>
          </div>
          <div className="view-flex-display">
            <div className="action-view">
              <div className="action-item">
                <img className="action-item-icon" src={laptopIcon} />
              </div>
              <div className="center-align">{item.modality}</div>
            </div>
            <div className="action-view">
              <div className="action-item">
                <img className="action-item-icon" src={calendarIcon} />
              </div>
              <div className="center-align">{item.duration}</div>
            </div>
            <div className="action-view">
              <div className="action-item">
                <img className="action-item-icon" src={bookIcon} />
              </div>
              <div className="center-align">{item.creditHrs} Total Credits</div>
            </div>
          </div>
        </div>
        <div className="showmore-btn" onClick={showMore}>
          <div>
            {btnText}
            <div className="moreicon">
              <FontAwesomeIcon icon={moreIcon} />
            </div>
          </div>
        </div>
        {moreIcon === faAngleUp ? (
          <div>
            <p className="program-desc-cls">{item.description}</p>
            <div className="view-program-cls">
              <div onClick={onViewProgram} program={item.programName}>
                VIEW PROGRAM
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default ProgramItemB;
