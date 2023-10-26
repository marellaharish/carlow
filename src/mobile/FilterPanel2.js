import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./FilterPanel2.css";
import { useState } from 'react';
import CollapsePanel1 from "./CollapsePanel1";

const FilterPanel2 = ({
  resetFilters,
  filterChange,
  onClose,
  filterData,
  selectedValues, showResetButton
}) => {
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
      <section className="modal-main2">
        <div className="filer-panel2">
          <div className="mfilter-header">
            <div className="filter-count">
              FILTERS APPLIED ({totalItems})
            </div>
            <div className="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>
          <CollapsePanel1
            name="Modality"
            data={filterData.modality}
            filterChange={onFilterChange}
            open={true}
            cssCheckName="modality"
            selectedItems={selectedValues.modality}
          />
          <CollapsePanel1
            name="Program Level"
            data={filterData.programLevel}
            filterChange={onFilterChange}
            open={false}
            cssCheckName="programlevel"
            selectedItems={selectedValues.programLevel}
          />
          <CollapsePanel1
            name="Field Of Study"
            data={filterData.fieldOfStudy}
            filterChange={onFilterChange}
            open={false}
            cssCheckName="fieldofstudy"
            selectedItems={selectedValues.fieldOfStudy}
          />
          <div className="bottm-ttolbar2">
            <center>
              <button className="primary-button" onClick={filterChange}>
                Confirm
              </button>
              {
                showResetButton?
              <button className="secondry-button" onClick={onResetFilters}>
                Reset
              </button> :<></>
              }
            </center>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterPanel2;
