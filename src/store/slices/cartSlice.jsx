import { createSlice } from "@reduxjs/toolkit";

const getLocalCart = () => {
  let localCart = localStorage.getItem("cart");
  //  if (localCart.length ===0) {
  // return[]
  // } else {
  //  return JSON.parse(localCart)
  //}
  const pasedata = JSON.parse(localCart);
  if (!Array.isArray(pasedata)) return [];
  return pasedata;
};


  let updateditems = localStorage.getItem("items");





const initial = {
  cart: getLocalCart(),
  amount: 1,
  totalitem:updateditems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,

  reducers: {
    addCart(state, action) {
      let find = state.cart.findIndex((c) => c.id === action.payload.id);
      if (find >= 0) {
        alert("already in cart\n Please check the cart. ");
      } else {
        state.cart.push({...action.payload,quantity :1});
       
       state.totalitem +=1
      alert('added in cart\n You can check it in the cart.')
       
      }
     
     

     
    },
    increaseAmount(state, action) {
         let amount = state.cart.find((i)=>(
        i.id === action.payload
      ))

      
        if (amount.quantity<5) {
            amount.quantity++;
         state.totalitem ++
            
        } else {
           amount.quantity=5
           alert('The amount should be from 1 to 5.')
        }
      
    },
    decreaseAmount(state, action) {
      let amount = state.cart.find((i)=>(
        i.id === action.payload
      ))
    
      
        if (amount.quantity>1) {
            amount.quantity --;
         state.totalitem --
            
        } else {
           amount.quantity=1
           alert('The amount should be from 1 to 5.')
        }
      
    },
    deleteAction(state,action){
        let newUpdate = state.cart.filter((i)=>(
          i.id !== action.payload
        ))
        let updateditems= newUpdate.reduce((i,c)=>{
          let{quantity}= c
          i=i+ quantity
          return i
       },0)
        state.totalitem = updateditems
        state.cart= newUpdate
    },
    cartRemover(state){
      state.cart=[]
      state.totalitem=0
    },
    totalitems(state){
      let updateditems= state.cart.reduce((i,c)=>{
        let{quantity}= c
        i=i+ quantity
        return i
     },0)
  
     
     state.totalitem = updateditems
    }


  
  },
});

export const {deleteAction, addCart, increaseAmount,decreaseAmount, cartRemover,totalitems  } = cartSlice.actions;

export default cartSlice;
