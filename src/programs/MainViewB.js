import ResultsViewB from "./ResultsViewB";
import FBSelectedItem from "../newfilter/FBSelectedItem";
import "./MainViewB.css";
import FilterB from "../newfilter/FilterB";
import { useState, useRef } from "react";
import "@fontsource/merriweather-sans";
import "@fontsource/inter";
import "@fontsource/oswald";
import "@fontsource/public-sans";

const myPrograms = require("../data/newPrograms.json");
const prgLvl = require("../data/ProgramLevels.json");
const modalities = require("../data/Modalities.json");
var myselVals = [];

function MainViewB() {
  const filterData = {
    modality: "",
    programLevel: "",
    fieldOfStudy: "",
  };

  const newPrograms = myPrograms.sort((a, b) =>
  {
    if(a.featured < b.featured){
       return 1;
    }else{
      return  a.programName > b.programName ? 1 : b.programName > a.programName ? -1 : 0
    }
   
 }
  );

  const childRef = useRef(null);
  let plValues = [],
    fosValues = [];
  const [itemOffset, setItemOffset] = useState(0);
  const [filterResults, setFilterResults] = useState(newPrograms);
  const [selectedValues, setSelectedValues] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [firstPage, setFirstPage] = useState("");
  const [secondPage, setSecondPage] = useState("hidedisp");
  const [selProgram, setSelProgram] = useState("");
  const [showSeleted, setShowSelected] = useState(false);
  const [ showResetButton,setShowResetButton] = useState(false);

  // const [plValues, setPlValues] = useState([]);
  // const [fosValues, setFosValues] = useState([]);

  const getUniqueValues = (name, programs) => {
    let items = programs.map((item) => item[name]);
    return items
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort();
  };

  filterData.modality = modalities.map((item) => item.name);
  filterData.programLevel = prgLvl.map((item) => item.name);
  filterData.fieldOfStudy = getUniqueValues("fieldOfStudy", newPrograms);

  const [modValues, setModValues] = useState(filterData.modality);

  const onPLChange = () => {
    let values = [];
    let eles = document.querySelectorAll(".plitem");
    eles.forEach(function (item) {
      let name = item.getAttribute("name");
      if (!selectedValues.includes(name)) {
        values.push(item.getAttribute("name"));
      }
    });
    plValues = values;
    //selectedValues = selectedValues.concat(values);
    //setPlValues(values);
    values = myselVals.concat(values);
    setSelectedValues(values);
    myselVals = values;
    // onFilterChange(values, fosValues);
  };

  const onFOSChange = () => {
    let values = [];
    let eles = document.querySelectorAll(".fositem");
    eles.forEach(function (item) {
      let name = item.getAttribute("name");
      if (!selectedValues.includes(name)) {
        values.push(item.getAttribute("name"));
      }
    });
    fosValues = values;
    //selectedValues = selectedValues.concat(values);
    // setFosValues(values);
    values = myselVals.concat(values);
    setSelectedValues(values);
    myselVals = values;
    // onFilterChange(plValues, values);
  };

  const onRemove = (item) => {
    let index = selectedValues.indexOf(item);
    let selItems = [];
    let pv = [];
    let fv = [];
    let values1 = [];
    let values2 = [];
    let foss = filterData.fieldOfStudy;
    selectedValues.forEach(function (name) {
     if (foss.includes(name)) {
        values1.push(name);
      }
    });
    let fosValues = values1;
    let pls = filterData.programLevel;
    selectedValues.forEach(function (name) {
      if (pls.includes(name)) {
        values2.push(name);
      }
    });
    plValues = values2;
    if (index > -1) {
      selItems = selectedValues.filter((name) => {
        return item != name;
      });
      pv = plValues.filter((name) => {
        return item != name;
      });
      fv = fosValues.filter((name) => {
        return item != name;
      });
      // setPlValues(pv);
      // setFosValues(fv);
      myselVals = selItems;
      setSelectedValues(selItems);
      plValues = pv;
      fosValues = fv;
      //selectedValues = selItems;
    }
    onFilterChange(pv, fv, false);
  };

  const onClearAll = () => {
    childRef.current.onCloseFilter();
    setShowResetButton(false);
    let eleModality = document.querySelectorAll("input[type=checkbox]");
    let modalityVals = [];
    eleModality.forEach(function (item) {
      modalityVals.push(item.name);
    });
    setModValues(modalityVals);
    document.querySelector(".searhtext-cls").value = "";
    plValues = [];
    fosValues = [];
    setSelectedValues([]);
    myselVals = [];
    setFilterResults(newPrograms);
    let pageEl = document.getElementsByClassName('pageClass')[0];
    let page1 = pageEl && pageEl.querySelector('[aria-label="Page 1"]');
    page1 && page1.click();
    //onFilterChange([], [], true);
    //childRef.current.onCloseFilter();
  };

  const onModalityChange = () => {
    onFilterChange(plValues, fosValues, false);
  };

  const onNameSearch = (e) => {
    let val = e.target.value;
    if (!val) {
      onFilterChange(plValues, fosValues, false);
    } else {
      let fPrograms = filterResults.filter((item) => {
        let index = item.programName.toLowerCase().indexOf(val.toLowerCase());
        if (index > -1) {
          return item;
        } else {
          return false;
        }
      });
      setFilterResults(fPrograms);
    }
  };

  const onApplySearch = () => {
    let values1 = [];
    childRef.current.onCloseFilter();
    filterData.fieldOfStudy.forEach(function (item) {
      if (myselVals.includes(item)) {
        values1.push(item);
      }
    });
    fosValues = values1;

    let values2 = [];
    filterData.programLevel.forEach(function (item) {
      if (myselVals.includes(item)) {
        values2.push(item);
      }
    });
    plValues = values2;
    let selv = values1;
    selv = selv.concat(values2);
    setSelectedValues(selv);
    setShowSelected(selv.length > 0);
    onFilterChange(plValues, fosValues, false);
    //childRef.current.onCloseFilter();
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % filterResults.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    window.scrollTo({top: 0});
  };

  const onFilterChange = (pv, fv, fromReset) => {
    let eleModality = document.querySelectorAll("input[type=checkbox]");
    let modalityVals = [];
    eleModality.forEach(function (item) {
      if (item.checked || fromReset) {
        modalityVals.push(item.name);
      }
    });
    setModValues(modalityVals);
    let searchtxtB = document.getElementById('searchtxtB').value;
    if(modalityVals.length !=3 || pv.length>0 || fv.length>0 || searchtxtB.length>0){
          setShowResetButton(true)
    }else{
        setShowResetButton(false);
    }
    let fPrograms = newPrograms.filter(
      ({ modality, programType, fieldOfStudy }) => {
        let hasModality = false;
        let hasPL = true;
        let hasFOS = true;
        if (modalityVals.length > 0) {
          hasModality = modalityVals.includes(modality);
        }
        if (pv.length > 0) {
          console.log(pv[0].toLowerCase());
          //hasPL = pv.includes(programLevel);

          hasPL = pv.some((pl) =>
            programType.toLowerCase().startsWith(pl.toLowerCase())
          );
        }
        if (fv.length > 0) {
          hasFOS = fv.includes(fieldOfStudy);
        }
        return hasModality && hasPL && hasFOS;
      }
    );
    
    console.log(fPrograms);
    setFilterResults(fPrograms);
    // setPageNo(0);
    // setItemOffset(0);
    let pageEl = document.getElementsByClassName('pageClass')[0];
    let page1 = pageEl && pageEl.querySelector('[aria-label="Page 1"]');
    page1 && page1.click();
  };

  const onViewProgram = (e) => {
    setSelProgram(e.target.getAttribute("program"));
    setFirstPage("hidedisp");
    setSecondPage("");
  };

  const backHome = () => {
    setFirstPage("");
    setSecondPage("hidedisp");
  };

  return (
    <div className="bcenter-view">
      <div className={firstPage}>
        <div className="header-panel">
          <div className="title">Programs</div>
          <p className="header-desc">
            Concordia University, St. Paul can help you achieve your education
            goals with affordable online programs offered through CSP Global.
            One decision changes everything — find the program that’s perfect
            for you by choosing the type, level, or field of study you are
            interested in.
          </p>
        </div>
        <div className="bweb-filter">
          <FilterB
            filterData={filterData}
            selectedValues={selectedValues}
            onModalityChange={onModalityChange}
            onPLChange={onPLChange}
            onFOSChange={onFOSChange}
            nameSearch={onNameSearch}
            onClearAll={onClearAll}
            modValues={modValues}
            onApplySearch={onApplySearch}
            ref={childRef}
            showResetButton={showResetButton}
          />
        </div>
        {selectedValues.length > 0 ? (
          <FBSelectedItem
            items={selectedValues}
            onRemove={onRemove}
            showItem={showSeleted}
          />
        ) : (
          <></>
        )}
        <div className="bmainview">
          <ResultsViewB
            programs={filterResults}
            handlePageClick={handlePageClick}
            itemOffset={itemOffset}
            pageNo={pageNo}
            onViewProgram={onViewProgram}
            onClearAll={onClearAll}
            onApplySearch={onApplySearch}
          />
        </div>
      </div>
      <div className={secondPage}>
        <div>
          <span onClick={backHome} className="back">
            ALL PROGRAMS
          </span>{" "}
          / {selProgram}
        </div>
        <div className="apgm-title">{selProgram}</div>
      </div>
    </div>
  );
}

export default MainViewB;
