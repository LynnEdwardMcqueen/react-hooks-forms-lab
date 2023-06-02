import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  // This is the state variable for the items.  Since we can add an item, React must re-render.
  const [itemsToDisplay, addItemToDisplay] = useState(items)


  // These are the state variables for the selection operation
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText ] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  
  function handleSearchChange(event) {
    event.preventDefault();

    setSearchText(event.target.value)
    return;
  }


 
  function onItemFormSubmit(newItem) {
    // Add newItem to the state variable.
    addItemToDisplay([...itemsToDisplay, newItem])
  }

  const filteredItems = itemsToDisplay.filter((item) => {
    if (item.name.search(searchText) != -1) {
      debugger
      if (selectedCategory === "All")  return true;

      return item.category === selectedCategory;
    } else {
      return false;
    }
  });
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit= {onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {handleSearchChange} search = {searchText}/>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
