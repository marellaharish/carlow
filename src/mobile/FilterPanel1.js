import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./FilterPanel1.css";
import { useState } from 'react';
import CollapsePanel from "./CollapsePanel";

const FilterPanel1 = ({
  resetFilters,
  filterChange,
  onClose,
  filterData,
  selectedValues, showResetButton
}) => {
  // const [showFilter, setShowFilter] = useState("modal display-block");
  // const onClose = function () {
  //     setShowFilter("modal display-none")
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
          <CollapsePanel
            name="Modality"
            data={filterData.modality}
            filterChange={onFilterChange}
            isExpanded={true}
            cssCheckName="modality"
            selectedItems={selectedValues.modality}
          />
          <CollapsePanel
            name="Program Level"
            data={filterData.programLevel}
            filterChange={onFilterChange}
            isExpanded={false}
            cssCheckName="programlevel"
            selectedItems={selectedValues.programLevel}
          />
          <CollapsePanel
            name="Field Of Study"
            data={filterData.fieldOfStudy}
            filterChange={onFilterChange}
            isExpanded={false}
            cssCheckName="fieldofstudy"
            selectedItems={selectedValues.fieldOfStudy}
          />
        </div>
        <div className="bottm-ttolbar">
          <center>
            <button className="primary-button" onClick={filterChange}>
              Confirm
            </button>
            {
              showResetButton?
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

export default FilterPanel1;
