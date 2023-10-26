import BSelectItem from './BSelectItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


function BMultiSelect({ items, selectedVals, onClose, cssName }) {
    console.log(selectedVals)
    return (
        <div className='bmodal'>
            <div className='bmodal-filter'>
                <div>
                    <div className='bmultiselectt-close' onClick={onClose} >
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>
                <div>
                    {items.map(function (item, i) {
                        let key = item + '-' + i;
                        let selected = selectedVals && selectedVals.indexOf(item) > -1
                        return <BSelectItem name={item} isSelect={selected}  cssName={cssName} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default BMultiSelect;