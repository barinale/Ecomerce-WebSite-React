import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:'Cart',
    initialState:{
        List:[],
        Total:0
    },
    reducers:{
        Add: (state, action) => {
            const formattedPrice = parseFloat((state.Total + action.payload.price).toFixed(2));

            state.List.push(action.payload);
            state.Total = formattedPrice;
            console.log(state.Total)
          },
        // Add:(state,action)=>{
        //     let UpdateItLsit =state.List.push(action.payload);
        //     let UpdatItTotal = state.Total+action.payload.price;

        //     return {...state,List:UpdateItLsit,Total:UpdatItTotal}
                    
        // },
        Remove:(state,action)=>{
            const updatedList = state.List.filter(item => item.id !== action.payload.item.id);
            // const updatedTotal = state.Total - action.payload.item.price;
            const formattedPrice = parseFloat((state.Total - action.payload.item.price).toFixed(2));
            return {
                ...state,
                List: updatedList,
                Total: formattedPrice,
            };
        },
    }
}) 
export default CartSlice.reducer
export const {Add,Remove} = CartSlice.actions