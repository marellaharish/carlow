import { useState,useEffect, useRef } from "react";
const MultiSelectItem = ({item, filterChange, checked}) => {
    const itemRef = useRef();
    const [selected, setSelected] = useState(checked);
    const onItemSelect= (e)=>{ 
        if(!e.target.type){
            
            e.target.querySelector('.checkbox-cls').value=!selected;
        }else{
            setSelected(!selected);
        }
    }
    return (<label key={itemRef} onClick={onItemSelect}>
        <input type='checkbox' className='checkbox-cls' name={item}
            onChange={filterChange}
            checked={selected}
        />
        {item}
    </label>)
}

export default MultiSelectItem