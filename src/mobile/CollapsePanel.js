import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import MultiSelect from "../components/MultiSelect";
import { useState } from "react";

const CollapsePanel = ({ name, data, filterChange, isExpanded, cssCheckName, selectedItems }) => {
  var filteredArray = data.filter(function (n) {
    return selectedItems.indexOf(n.toLowerCase()) !== -1;
  });
  const [expand, setExpand] = useState(isExpanded || filteredArray.length > 0);
  let eIcon = expand ? faChevronUp : faChevronDown;
  const [expandIcon, setExpandIcon] = useState(eIcon);
  const contclsName = "filter-section1 defalt-text " + cssCheckName;
  const onToggleItem = () => {
    setExpand(!expand);
    setExpandIcon(expand ? faChevronDown : faChevronUp);
  };
  return (
    <div className={contclsName}>
      <div className="mfilter-subheader" onClick={onToggleItem}>
        <div className="filter-title filter-title1">{name}</div>
        <div className="accordian-cls">
          <FontAwesomeIcon icon={expandIcon} />
        </div>
      </div>
      {expand ? (
        <MultiSelect
          items={data}
          filterChange={filterChange}
          cssName="field-container1"
          selectedItems={selectedItems}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CollapsePanel;
