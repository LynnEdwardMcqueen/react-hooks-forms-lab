import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
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


 
  function onItemFormSubmit(foo) {
    console.log("onItemFormSubmit")
    console.log(foo)
    debugger
  }

  const itemsToDisplay = items.filter((item) => {
    if (item.name.search(searchText) != -1) {
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
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
