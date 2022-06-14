import React, { useState } from 'react'
import "./Header.css";
import { searchtoList,selecttoList } from '../Store/shopslice';
import { useDispatch } from 'react-redux';
function Header() {
  const [selected,setselected]=useState("");
  const [showDate,setShowDate]=useState(false);
  const dispatch=useDispatch();
  const searchFilter=(event)=>{
    dispatch(searchtoList(event.target.value));
  }
  const selectFilter=(event)=>{
    if(event.target.value==="date"){
      setShowDate(true);
    }
    else{
      setShowDate(false);
    }
    setselected(event.target.value);
    dispatch(selecttoList(event.target.value));
    
  }
  
  return (
    <div className="header">
        <h1 className='header-title'>Shop List</h1>
        <div>
            <select name="filter" className='search'  onChange={selectFilter} value={selected}>
            <option value="" disabled>Please Select Filter</option>
                <option  value="area">Area</option>
                <option value="category">Category</option>
                <option value="date">Date</option>
            </select>
          {!showDate && <input type="string" placeholder='search shop here' className='search' onChange={searchFilter}></input> 
}</div>
    </div>

  )
}

export default Header