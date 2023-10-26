import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MultiSelectA from "../components/MultiSelectA";

function Filter({ resetFilters, filterChange, nameSearch, filterData, showResetButton }) {
  return (
    <div className="filter-panel">
      <div className="filter-header">
        <span className="inline-header">FILTER PROGRAMS</span>
        {
          showResetButton?<span className="inline-header reset-filter" onClick={resetFilters}>
          RESET FILTERS
        </span>:<></>
        }
      </div>
      <hr />
      <div className="filter-panel-class">
        <div className="checkbox-container defalt-text modality">
          <div className="filter-title">Modality</div>
          <MultiSelectA
            items={filterData.modality}
            filterChange={filterChange}
          />
        </div>
        <hr />
        <div className="checkbox-container defalt-text programlevel">
          <div className="filter-title">Program Level</div>
          <MultiSelectA
            items={filterData.programLevel}
            filterChange={filterChange}
          />
        </div>
        <hr />
        <div className="checkbox-container defalt-text fieldofstudy">
          <div className="filter-title">Field Of Study</div>
          <MultiSelectA
            items={filterData.fieldOfStudy}
            filterChange={filterChange}
          />
        </div>
        <div className="checkbox-container">
          <div className="searchfield-cnt">
            <input type="text" className="text-input" id="searchtxtA" onKeyUp={nameSearch} placeholder="Search Programs" />
            <span className="input-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
