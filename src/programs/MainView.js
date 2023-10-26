import Filter from "./Filter";
import ResultsView from "./ResultsView";
import "./MainView.css";
import SideFilterPanel from "../mobile/SideFilterPanel";
import FilterPanel1 from "../mobile/FilterPanel1";
import FilterPanel2 from "../mobile/FilterPanel2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "@fontsource/merriweather-sans";
import "@fontsource/inter";
import "@fontsource/oswald";
import "@fontsource/public-sans";
const myPrograms = require("../data/newPrograms.json");
const prgLvl = require("../data/ProgramLevels.json");
const modalities = require("../data/Modalities.json");
function MainView({ fview}) {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [ cPage, setCPage] = useState(10);
  let filterView= fview;
  
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
  
  const [ showResetButton,setShowResetButton] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    modality: [],
    programLevel: [],
    fieldOfStudy: [],
    totalFilters: 0,
  });

  const [showFilter1, setShowFilter1] = useState(false);
  const [showFilter2, setShowFilter2] = useState(false);
  const [showFilter3, setShowFilter3] = useState(false);
  const [firstPage, setFirstPage] = useState("");
  const [secondPage, setSecondPage] = useState("hidedisp");
  const [selProgram, setSelProgram] = useState("");
  const [filterResults, setFilterResults] = useState(newPrograms);
  
  let [pgs, setPgs] = useState(newPrograms.slice(0, cPage))
  const [showBtn, setShowBtn] = useState(newPrograms.length >= cPage);

  const getUniqueValues = (name, programs) => {
    let items = programs.map((item) => item[name]);
    return items
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort();
  };

  filterData.modality = modalities.map((item) => item.name);
  filterData.programLevel = prgLvl.map((item) => item.name);
  filterData.fieldOfStudy = getUniqueValues("fieldOfStudy", newPrograms);
  // console.log(filterData);
  const onResetFilters = () => {
    setShowResetButton(false);
    setCPage(10);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    setFilterResults(newPrograms);
    setPgs(newPrograms.slice(0, 10));
    setShowBtn(newPrograms.length >= 10);
    setSelectedValues({
      modality: [],
      programLevel: [],
      fieldOfStudy: [],
      totalFilters: 0,
    });
    onCloseFilter();
  };

  const onCloseFilter = () => {
    setShowFilter1(false);
    setShowFilter2(false);
    setShowFilter3(false);
  };

  const initFilter =()=>{
    setShowResetButton(false)
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
    setFilterResults(newPrograms);
    setSelectedValues({
      modality: [],
      programLevel: [],
      fieldOfStudy: [],
      totalFilters: 0,
    });
  }

  const onFilter1 = () => {
    if(filterView == 'f1'){
      setSelectedFilter(1);
      setShowFilter1(true);
    }else
    if(filterView == 'f2'){
      setSelectedFilter(2);
      setShowFilter2(true);
    }else
    if(filterView == 'f3'){
      setSelectedFilter(3);
      setShowFilter3(true);
    }
    // if(selectedFilter!=1){
    //   initFilter();
    // }
    
  };

  const onFilter2 = () => {
    if(selectedFilter!=2){
      initFilter();
    }
    setSelectedFilter(2);
    setShowFilter2(true);
  };

  const onFilter3 = () => {
    if(selectedFilter!=3){
      initFilter();
    }
    setSelectedFilter(3);
    setShowFilter3(true);
  };

  const getInputValues = (elements) => {
    let values = [];
    elements.forEach(function (item) {
      if (item.checked) {
        values.push(item.name.toLowerCase());
      }
    });
    return values;
  };

  const onFilterChange = () => {
    let eleModality = document
      .querySelector(".modality")
      .querySelectorAll("input[type=checkbox]");
    let elePL = document
      .querySelector(".programlevel")
      .querySelectorAll("input[type=checkbox]");
    let elePOS = document
      .querySelector(".fieldofstudy")
      .querySelectorAll("input[type=checkbox]");

    let selectedModality = getInputValues(eleModality);
    let selectedPL = getInputValues(elePL);
    let selectedFOS = getInputValues(elePOS);
    let searchtxtA = document.getElementById('searchtxtA').value;

    if(selectedModality.length>0 || selectedPL.length>0 || selectedFOS.length>0 || searchtxtA.length>0){
         setShowResetButton(true)
    }else{
        setShowResetButton(false);
    }
    
       
    let fPrograms = newPrograms.filter(
      ({ modality, programType, fieldOfStudy, programName }) => {
        let hasModality = true;
        let hasPL = true;
        let hasFOS = true;
        if (selectedModality.length > 0) {
          hasModality = selectedModality.includes(modality.toLowerCase());
        }
        if (selectedPL.length > 0) {
          //console.log(selectedPL[0]);
          //console.log(programType.toLowerCase());
          //console.log(programType.toLowerCase().startsWith(selectedPL[0]));
          hasPL = selectedPL.some((pl) =>
            programType.toLowerCase().startsWith(pl.toLowerCase())
          );
        }
        if (selectedFOS.length > 0) {
          hasFOS = selectedFOS.includes(fieldOfStudy.toLowerCase());
        }
        let hasText;
        if(searchtxtA){
          let index = programName.toLowerCase().indexOf(searchtxtA.toLowerCase());
          if (index > -1) {
            hasText = true;
          } else {
            hasText = false
          }
        }else{
          hasText = true
        }
        return hasModality && hasPL && hasFOS && hasText;
      }
    );
    setSelectedValues({
      modality: selectedModality,
      programLevel: selectedPL,
      fieldOfStudy: selectedFOS,
      totalFilters:
        selectedModality.length + selectedPL.length + selectedFOS.length,
    });
    setCPage(10);
    setFilterResults(fPrograms);
    setPgs(fPrograms.slice(0, cPage));
    setShowBtn(fPrograms.length >= cPage);
    onCloseFilter();
  };
  const onShowMore = () => {
    if (filterResults.length >= cPage) {
      let totalCount = cPage + 10;
       setCPage(totalCount);
       setPgs(filterResults.slice(0, totalCount));
      if(filterResults.length< totalCount){
        setShowBtn(false);
      }
    }
  };
  const onNameSearch = (e) => {
    let val = e.target.value;
    onFilterChange();
    // if (!val) {
    //   onFilterChange();
    // } else {
    //   let fPrograms = filterResults.filter((item) => {
    //     let index = item.programName.toLowerCase().indexOf(val.toLowerCase());
    //     if (index > -1) {
    //       return item;
    //     } else {
    //       return false;
    //     }
    //   });
    //  // setFilterResults(fPrograms);
    //   setCPage(10);
    //   setFilterResults(fPrograms);
    //   setPgs(fPrograms.slice(0, cPage));
    //   setShowBtn(fPrograms.length >= cPage);
    // }
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
    <div className="center-view">
      <div className={firstPage}>
        {showFilter1 ? (
          <SideFilterPanel
            resetFilters={onResetFilters}
            filterChange={onFilterChange}
            onClose={onCloseFilter}
            filterData={filterData}
            selectedValues={selectedValues}
            showResetButton={showResetButton}
          />
        ) : (
          <></>
        )}
        {showFilter2 ? (
          <FilterPanel1
            resetFilters={onResetFilters}
            filterChange={onFilterChange}
            onClose={onCloseFilter}
            filterData={filterData}
            selectedValues={selectedValues}
            showResetButton={showResetButton}
          />
        ) : (
          <></>
        )}
        {showFilter3 ? (
          <FilterPanel2
            resetFilters={onResetFilters}
            filterChange={onFilterChange}
            onClose={onCloseFilter}
            filterData={filterData}
            selectedValues={selectedValues}
            showResetButton={showResetButton}
          />
        ) : (
          <></>
        )}
        <div className="mobile-filter-options">
          <div className="filter-align-center1">
            <div className="header-filtericon" onClick={onFilter1}>
                     <FontAwesomeIcon icon={faFilter} /> Filter
            </div>
            {/* <div className="header-filtericon" onClick={onFilter2}>
              <FontAwesomeIcon icon={faFilter} />2
            </div>
            <div className="header-filtericon" onClick={onFilter3}>
              <FontAwesomeIcon icon={faFilter} />3
            </div> */}
          </div>
        </div>

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
        <div className="mainview">
          <Filter
            resetFilters={onResetFilters}
            filterChange={onFilterChange}
            nameSearch={onNameSearch}
            filterData={filterData}
            showResetButton={showResetButton}
          ></Filter>
          <ResultsView
            programs={filterResults}
            onViewProgram={onViewProgram}
            onShowMore={onShowMore}
            showBtn={showBtn}
            pgs={pgs}
          ></ResultsView>
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

export default MainView;
