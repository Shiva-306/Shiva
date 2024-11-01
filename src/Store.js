import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Tomato ',   price: 200.5 },
            { name: 'Potato ',   price: 100.8 },
            { name: 'Brinjal',   price: 50.2 },
            { name: 'Banana ',   price: 80.3 },
        ],
        nonveg: [
            { name: 'Chicken', price: 500.6 },
            { name: 'Mutton ', price: 1000.5 },
            { name: 'Fish   ', price: 800.6 },
            { name: 'Prawns ', price: 1500.2 },
        ],
    },
    
});




const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
            
        },
        increment:(state, action) => {
            const item = state.find((item) => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement:(state,action)=>{
            const item=state.find((item)=>item.name===action.payload.name)
            if(item&&item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter((item)=>item.name!==action.payload.name);
            }
        },
        resetItem: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        }
        
}})
export const {addToCart,increment,decrement,resetItem}=cartSlice.actions;



const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart : cartSlice.reducer,
    }

});
export default store;