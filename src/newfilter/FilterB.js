import './FilterB.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faChevronUp, faSearch, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import BMultiSelect from './BMultiSelect';
import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
const FilterB= forwardRef((props, ref)=>{
    console.log(props.filterData);
    const [showPL, setShowPL] = useState(false);
    const [showFOS, setShowFOS] = useState(false);
    const [plCss, setPlCss] = useState('filterb-field');
    const [fosCss, setFosCss] = useState('filterb-field');
    const [plIcon, setPlIcon] = useState(faChevronDown);
    const [fosIcon, setFosIcon] = useState(faChevronDown);
    
    useImperativeHandle(ref, () => ({
        onCloseFilter() {
            setShowFOS(false);
            setFosCss('filterb-field');
            setFosIcon(faChevronDown);
            setShowPL(false);
            setPlCss('filterb-field');
            setPlIcon(faChevronDown);
        }
      }));
    const onFBClearAll = () => {
        //ref.onCloseFilter();
        props.onClearAll();
    }

    const onFBApplySearch = () => {
        props.onPLChange();
        props.onFOSChange();
        props.onApplySearch();
       // ref.onCloseFilter();
        
    }
    const onPgmLvl = () => {
        props.onFOSChange();
        setShowFOS(false);
        setFosCss('filterb-field');
        setPlCss(!showPL ? 'filterb-field select-fos' : 'filterb-field');
        setShowPL(!showPL);
        setFosIcon(faChevronDown);
        setPlIcon(!showPL ? faChevronUp : faChevronDown);
        if (showPL) {
            props.onPLChange();
        }
    }
    const onFOS = () => {
        props.onPLChange();
        setShowPL(false);
        setPlCss('filterb-field');
        setFosCss(!showFOS ? 'filterb-field select-fos' : 'filterb-field');
        setShowFOS(!showFOS);
        setPlIcon(faChevronDown);
        setFosIcon(!showFOS ? faChevronUp : faChevronDown);
        if (showFOS) {
            props.onFOSChange();
        }
    }
    return (
        <div>
            <div className='fb-fieldcontainer'>
                <div className='filterb-panel'>
                    <div className='filterb-label'><FontAwesomeIcon icon={faFilter} /> Filter by:</div>
                    <div className='checkgroup'>
                        {props.filterData.modality.map(function (item, i) {
                            let checked = props.modValues.indexOf(item) > -1
                            return (<label className='checkbox-bcls'>
                                <input type='checkbox' name={item} checked={checked} onChange={props.onModalityChange} /> {item}
                            </label>);
                        })}
                    </div>
                    <div className='btn-cnt2'>
                    {props.showResetButton?
                        <div className='mfb-clearall' onClick={onFBClearAll}>Reset Filters</div> :<></>}
                        <div className='mfb-applyall' onClick={onFBApplySearch}>Apply Filters</div>
                    </div>
                    <div className={plCss} onClick={onPgmLvl}><div className='fb-label'>Program Level </div><FontAwesomeIcon icon={plIcon} /></div>
                    <div className={fosCss} onClick={onFOS}><div className='fb-label'>Field Of Study </div><FontAwesomeIcon icon={fosIcon} /></div>
                    <div className='btn-cnt'>
                    <div className='fb-clearall' onClick={onFBApplySearch}>Apply Filters</div>
                    {props.showResetButton? <div className='fb-applyall' onClick={onFBClearAll}>Reset Filters</div>:<></>}
                    </div>
                    <div className='filterb-field-text'>
                        <span className='input-icon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input type='text' className="searhtext-cls" id="searchtxtB" placeholder="Search Programs" onKeyUp={props.nameSearch} /></div>
                </div>
                {showPL ? <BMultiSelect items={props.filterData.programLevel} selectedVals={props.selectedValues} onClose={onPgmLvl} cssName="plitem" /> : <></>}
                {showFOS ? <BMultiSelect items={props.filterData.fieldOfStudy} selectedVals={props.selectedValues} onClose={onFOS} cssName="fositem" /> : <></>}

            </div>
        </div>
    )

});

export default FilterB;