import React from 'react'
import "./Main.css"
import Login from './Login'
import List from './List';
import { setToAdd } from '../Store/shopslice';
import { useDispatch, useSelector } from 'react-redux';
function Main() {
const showlogin=useSelector((state)=>{return state.shop.toAdd});
const dispatch=useDispatch();
const addList=()=>{
    
    dispatch(setToAdd());
}
  return (
          <div className='main'>

       {!showlogin && <List></List> }
{!showlogin && <><button className='addBtn'  onClick={addList}>Click to add</button>   </>}
{showlogin && <Login></Login>}
      {/* </div> */}
        </div>
  )
}

export default Main