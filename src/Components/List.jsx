import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToList } from "../Store/shopslice";
import "./List.css";
function List() {
let listitems = useSelector((state) => state.shop.itemlist);
const searchkey=useSelector((state)=> state.shop.searchkey);
const selectkey=useSelector((state)=>state.shop.selectkey);
const today=new Date();
// console.log(today);

  listitems=listitems.filter((item)=>{
   
    let search= searchkey.toLowerCase();
    if(selectkey==="category"){
      return item.category.toLowerCase().includes(search);
    }
    if(selectkey==="area"){
    
      return item.area.toLowerCase().includes(search);
    }
    if(selectkey==="date"){
      let date=today.getFullYear()+"-"+(today.getMonth()+1) +"-"+today.getDate(); 
   
      let open=new Date(item.openDate);
      let close=new Date(item.closeDate);
      let day=new Date(date);

      return  day>open && day<close;
    }

     return listitems;
      
     
  })

  const dispatch=useDispatch();
  const showitems=listitems;
  const deleteList=(item)=>{
      dispatch(deleteToList(item))
  }
  

  
 
  return (
    <div className="list-container">
      {showitems.length === 0 ? (
        <p className="noList"> No Shops To Show</p>
      ) : (
       
          <ul>
            {showitems.map((item, index) => {
              return (
                <div className="list" key={index}>
                  <li className="item-name">{item.name}</li>
                  <li>{item.area}</li>
                  <li>{item.category}</li>
                  <li>{item.openDate}</li>
                  <li>{item.closeDate}</li>
                  <button className="deleteBtn" onClick={()=>{deleteList(item)}}>delete</button>
                </div>
              );
            })}
          </ul>
     
      )}
    </div>
  );
}

export default List;
