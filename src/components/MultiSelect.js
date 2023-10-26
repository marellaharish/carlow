import MultiSelectItem from "./MultiSelectItem";
const MultiSelect = ({ items,filterChange, cssName, selectedItems }) =>{
    return (
        <div className={cssName}>
            {items.map(function (item, i) {
                let checked =false;
                if(selectedItems){

                    checked =  selectedItems.indexOf(item.toLowerCase())>-1
                }
                console.log(checked);
                
                return <MultiSelectItem item={item} filterChange={filterChange}
                 checked={checked} />
            })}
        </div>
    );
}
export default MultiSelect