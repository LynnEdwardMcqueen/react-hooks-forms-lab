import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit, onCategorySelect , onNewItemName }) {
 // These are the state variables for the new item operation
const [newItemCategory, setNewItemCategory] = useState("Produce")
const [newItemName, setNewItemName] = useState("")

    function handleItemFormSubmitEvent(event) {
      event.preventDefault();
      onItemFormSubmit({id: uuid(), name: newItemName, category: newItemCategory})
      // Reset the state information
      setNewItemCategory("")
      setNewItemName("")

    }
    function handleCategorySelect(event) {
      setNewItemCategory(event.target.value)
    }
  
    function handleNewItemName(event) {
      setNewItemName(event.target.value)
    }

  return (
    <form className="NewItem" onSubmit= {handleItemFormSubmitEvent}>
      <label >
        Name:
        <input type="text" name="name" value = {newItemName} onChange= {handleNewItemName} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange= {handleCategorySelect} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
