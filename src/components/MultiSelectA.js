import MultiSelectItem from "./MultiSelectItem";
import { useState, useRef } from "react";
const MultiSelectA = ({ items,filterChange }) =>{
    return (
        <div >
            {items.map(function (item, i) {
                return <MultiSelectItemA item={item} filterChange={filterChange}  />
            })}
        </div>
    );
}

const MultiSelectItemA = ({item, filterChange}) => {
    const itemRef = useRef();
    return (<label key={itemRef} >
        <input type='checkbox' className='checkbox-cls' name={item}
            onChange={filterChange}
        />
        {item}
    </label>)
}
export default MultiSelectA