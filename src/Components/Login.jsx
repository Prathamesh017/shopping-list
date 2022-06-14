import React, { useState } from 'react'
import "./login.css";
import { setToAdd,addTOList } from '../Store/shopslice';
import { useDispatch } from 'react-redux';
function Login() {
const initalData={
    name:"",
    area:"",
    category:"",
    openDate:"",
    closeDate:""
}

const [FormData,setFormData]=useState(initalData);
const [otherOption,setOtherOption]=useState(false);


const [nameerror,setnameerror]=useState(false);
const [closeerror,setCloserror]=useState(false);

const  dispatch=useDispatch();

const inputHandler=(event)=>{
    const {name,value}=event.target;
    if(name==="category" && value==="other"){
    setOtherOption(true);
 
 }
else if(name==="category" && value!=="other"){
     setOtherOption(false);
}
   
   setFormData({
     ...FormData,
     [name]:value
   })
}

const selectHandler =(event)=>{
    
   
    setFormData({
        ...FormData,
        category:event.target.value
      })
    


}
const submitHandler=(e)=>{
    e.preventDefault();

    if(FormData.name==="" || FormData.area==="" ||FormData.category===""  ||FormData.openDate==="" ||FormData.closeDate===""){
        alert("Please Fill Whole Form");
        return;
    }

    if(!((/^[a-zA-Z ]+$/.test(FormData.name)))){

        
        setnameerror(true)
       
        return;
    }
    else{
        setnameerror(false);
    }
   
    
    if(FormData.closeDate<FormData.openDate){
      
        setCloserror(true);
        return;
    }
    else{
       
        setCloserror(false)
    }
    
    dispatch(addTOList(FormData));
    dispatch(setToAdd());
    
}
  return (
    <div className="login">
        <form className='login-form'> 
        <div className="shop-name">
            <label>Enter Shop Name</label>
            <input type="text" name="name" onChange={inputHandler} value={FormData.name}></input>
        <p className='error'>{nameerror? "Should Only Contain Alphabets" :" "}</p>
        </div>
        <div className="select-area">
            <label>Select Area</label>
            <select name="area" id='area' onChange={inputHandler} value={FormData.area}>
                <option value="" disabled>Select and Option</option>
                <option value="thane">Thane</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="Nashik">Nashik</option>
                <option value="nagpur">nagpur</option>
            </select>
        </div>
        <div className="select-category">
            <label>Select Category</label>
            <select name="category" id='category' onChange={inputHandler} value={FormData.category}>
             <option value="" disabled>Select and Option</option>
                <option  value="other">Add other</option>
                <option value="Grocery">Grocery</option>
                <option value="Baker">Baker</option>
                <option value="Butcher">Butcher</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary">Stationary</option>
            </select>
            { otherOption  &&<input type="text" placeholder='enter other category' className='otherCategory' onChange={selectHandler} name="category"></input>}
           
        
        </div>
        <div className="opening-hrs">
            <label>Select Opening Date</label>
            <input type="date" name="openDate" onChange={inputHandler} value={FormData.openDate}></input>

        </div>
        <div className="closing-hrs">
            <label>Select Closing Date</label>
            <input type="date" name="closeDate" onChange={inputHandler} value={FormData.closeDate}></input>
            <p className='error'>{closeerror? "Previous Date Than Opening" :" "}</p>
        </div>
        <button className='submitBtn' onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Login