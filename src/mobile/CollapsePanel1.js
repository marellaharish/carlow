import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataViewItem from "../components/DataViewItem";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CollapsePanel1 = ({ name, data, filterChange, open, cssCheckName, selectedItems }) => {
  var filteredArray = data.filter(function (n) {
    return selectedItems.indexOf(n.toLowerCase()) !== -1;
  });
  
  const [expand, setExpand] = useState(open || filteredArray.length>0);
  let reqIcon = open ? faChevronUp : faChevronDown;
  const [expandIcon, setExpandIcon] = useState(reqIcon);
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
      <center>
        {expand ? (
          <div className="dataview-container">
            {data.map(function (item, i) {
              return <DataViewItem keyindex={i} item={item} filterChange={filterChange}
                selectedItems={selectedItems} />;
            })}
          </div>
        ) : (
          <></>
        )}
      </center>
    </div>
  );
};

export default CollapsePanel1;

//{expand?<MultiSelect items={data} filterChange={()=>{}}cssName='field-container1' />:<></>}
