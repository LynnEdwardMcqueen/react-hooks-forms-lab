import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

let searchBuffer = ""
let searchString = ""

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText ] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  
  function handleSearchChange(event) {
    event.preventDefault();
    
    searchBuffer = event.target.value
 //  if (event.key != 'Enter') {
  //    setSearchText(searchBuffer)
  //  }  else {
  //    setSearchText("Search...")
  //    searchBuffer = null
  

//    if (event.key === 'Enter') {
    
    setSearchText(event.target.value)
//    } else {
      return;
 //   }
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
      <ItemForm />
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
export {searchString}
