import { createSlice} from "@reduxjs/toolkit";

 const initialState=[{}]

 export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state,action){
            console.log("state",action.payload)
             state.push(action.payload);
        },
        removefromcart(state,action){
             return state.filter(e=>e.id!==action.payload);
        }
    }
})
export const {addtocart,removefromcart} = cartSlice.actions
export default cartSlice.reducer
