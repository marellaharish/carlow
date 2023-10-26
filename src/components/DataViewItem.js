import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from "react-dom";
import { useState, useRef} from 'react';
const DataViewItem = ({ keyindex, item,filterChange, selectedItems }) => {
    const viewRef = useRef();
    let selected = selectedItems.indexOf(item.toLowerCase())>-1;
    const [showClose, setShowClose] = useState(selected);
    const [viewCls,setViewCls] = useState(selected?'dataview-item selected':'dataview-item')
    const onCheck = ()=>{
       let view =  ReactDOM.findDOMNode(viewRef.current);
       view.querySelector("input").checked= !view.querySelector("input").checked;
       if(view.querySelector("input").checked){
         setShowClose(true);
         setViewCls('dataview-item selected');
       }else{
          setShowClose(false);
          setViewCls('dataview-item');
       }
       filterChange();
    }
    return (
        <div ref={viewRef} className={viewCls} key={viewRef} onClick={onCheck}>
            <input type='checkbox' name={item} hidden={true} />
            <div className='dataview-label'>{item}</div>
            {showClose?<div className='dataview-close'><FontAwesomeIcon icon={faClose} /></div>:<></>}
        </div>
    )
}

export default DataViewItem;