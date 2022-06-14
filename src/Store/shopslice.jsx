import { createSlice } from "@reduxjs/toolkit";


const shopSlice=createSlice({
    name:"shop",
    initialState:{toAdd:false,itemlist:[],searchkey:"",selectkey:""},
    reducers:{
        setToAdd:(state)=>{state.toAdd=!state.toAdd},
        addTOList:(state,action)=>{console.log(action.payload)
            state.itemlist.push({
                name:action.payload.name,
                area:action.payload.area,
                category:action.payload.category,
                openDate:action.payload.openDate,
                closeDate:action.payload.closeDate,
            })
            
           
        },
        deleteToList:(state,action)=>{
            const  deleted =action.payload.name;
            // const deleted=action.payload;

            state.itemlist=state.itemlist.filter((item)=>item.name!==deleted);

            console.log(deleted);
        },
        searchtoList:(state,action)=>{
            const search=action.payload.toLowerCase();
            state.searchkey=search;
            // console.log(search);
        },
        selecttoList:(state,action)=>{
            const select=action.payload;
            console.log(select);
            state.selectkey=select;
            searchtoList();
        }
      
       
    }
})


export const {setToAdd,addTOList,deleteToList,searchtoList,selecttoList} =shopSlice.actions;
export default shopSlice.reducer;