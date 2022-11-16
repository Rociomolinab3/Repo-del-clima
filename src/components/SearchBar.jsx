import React, { useState } from "react";
import "./SearchBar.css"
// import style from "./SearchBar.css"


export default function SearchBar({onSearch}) {

  const [searchInput,setSearchInput]= useState("");
  
  const changeHandler=(event)=>{
  setSearchInput(event.target.value)
  console.log(searchInput);
  }
  
    return( 
      <div className="styleSearchBar">
      <input 
      className="input-searchbar"
      type="text" 
      name="search" 
      id="search" 
      placeholder='Find a City' 
      onChange={changeHandler}></input>
     
      <button 
      className="button-searchbar"
      onClick={()=>onSearch(searchInput)}>
      Search
      </button>
      
    
    </div>
    )
  }; 
