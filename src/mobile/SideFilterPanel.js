import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./SideFilterPanel.css";
import { useState } from 'react';
import MultiSelect from "../components/MultiSelect";

const SideFilterPanel = ({
  resetFilters,
  filterChange,
  onClose,
  filterData,
  selectedValues, showResetButton
}) => {
  // const [showFilter, setShowFilter] = useState("modal display-block");
  // const onClose = function () {
  //     setShowFilter("modal display-none");
  // }

  const [totalItems, setTotalItems] = useState(selectedValues.totalFilters);
  const onFilterChange = () => {
    let checks = document.querySelectorAll("input[type=checkbox]");
    let values = [];
    checks.forEach(function (item) {
      if (item.checked) {
        values.push(item.name);
      }
    });
    setTotalItems(values.length);
  }

  const onResetFilters = ()=>{
    setTotalItems(0);
     resetFilters();

  }


  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="filer-panel">
          <div className="mfilter-header">
            <div className="filter-count">
              FILTERS APPLIED ({totalItems})
            </div>
            <div className="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>
          <div className="filter-section defalt-text modality">
            <div className="filter-title">Modality</div>
            <MultiSelect
              items={filterData.modality}
              filterChange={onFilterChange}
              cssName="field-container"
              selectedItems={selectedValues.modality}
            />
          </div>
          <div className="filter-section defalt-text programlevel">
            <div className="filter-title">Program Level</div>
            <MultiSelect
              items={filterData.programLevel}
              filterChange={onFilterChange}
              cssName="field-container"
              selectedItems={selectedValues.programLevel}
            />
          </div>
          <div className="filter-section defalt-text fieldofstudy">
            <div className="filter-title">Field Of Study</div>
            <MultiSelect
              items={filterData.fieldOfStudy}
              filterChange={onFilterChange}
              cssName="field-container"
              selectedItems={selectedValues.fieldOfStudy}
            />
          </div>
        </div>
        <div className="bottm-ttolbar">
          <center>
            <button className="primary-button" onClick={filterChange}>
              Confirm
            </button>
            {showResetButton?
            <button className="secondry-button" onClick={onResetFilters}>
              Reset
            </button>:<></>
            }
          </center>
        </div>
      </section>
    </div>
  );
};

export default SideFilterPanel;
