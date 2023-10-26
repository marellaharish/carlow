
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from "react";


const BSelectItem = ({ name, isSelect,cssName }) => {
    const itemRef = useRef();
    const [selected, setSelected] = useState(isSelect);
    const onItemSelect= ()=>{
        setSelected(!selected);
    }
    let clsName = cssName + ' bfilter-selected'
    return (
        <div className='bmdodal-item' key={itemRef} onClick={onItemSelect}>
            {
                selected ? (<div className={clsName} name={name}>
                    <FontAwesomeIcon icon={faCheck} />
                </div>) : <></>
            }
            <div className='fb-inline' >{name}</div>
        </div>
    )
}

export default BSelectItem;