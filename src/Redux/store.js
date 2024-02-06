import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeManager";
export default configureStore({
    reducer:{storeReducer}
})