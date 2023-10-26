import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const FBSelectedItem = ({ items, onRemove, showItem }) => {
    const onItemClick = (e) => {
        var el = e.target;
        if (el && el.getAttribute('name')) {
            onRemove(el.getAttribute('name'));
        }
    }
    return (
        <div>
            {showItem?
            <div className='fbselected-view'>
                <div className='fb-inline'>
                    <div className='fb-inline fb-selected-label fbstatic'>Applied Filters</div>
                    {items.map(function (item, i) {
                        let key = item + '-' + i;
                        return (<div className='fb-inline fb-selected-item' key={key}  >
                            <div className='fb-item-close' name={item} >
                                <FontAwesomeIcon icon={faClose} name={item} onClick={onItemClick} /></div>
                            <div className='fb-inline fb-selected-label' name={item} onClick={onItemClick}>{item}</div>
                        </div>)
                    })
                    }
                </div>
            </div>:<></>}
        </div>

    )
}
export default FBSelectedItem;