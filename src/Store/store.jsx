import { configureStore } from "@reduxjs/toolkit";
import shopslice from "./shopslice";
const Store=configureStore({
    reducer:{
        shop:shopslice
    }
})

export default Store