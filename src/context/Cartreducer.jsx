


function Cartreducer(state,action) {
 
  if (action.type=== "addcart") {
    let {id,amount,price,details}=action.payload
   
  
    let existingItem= state.cart.find((c)=>(c.id===id)) 
   if(existingItem){
      let updatedItem = state.cart.map((c)=>{
        if (c.id===id) {
          alert('already in chart')
         let newamount= c.amount
          return{
            ...c,
           amount:newamount
        }
      
        }else{
       
          return c
         
        }
        
        
      })
     
      return{
        ...state,
        cart:updatedItem
      }
     
    } else {
    
      alert('added in chart')
    
 let cartItem=  {
       id:id,
       amount,
       title:details.title,
       price,
       image : details.image
       
 }

    
    return{
        ...state,
        cart: [...state.cart, cartItem],
      }}}
    
      if (action.type==='increase-amount') {
        let newupdate= state.cart.map((c)=>{
         if (c.id===action.payload){
          let incresedamount= c.amount+1 
          if (incresedamount>5) {
             incresedamount= 5
             alert("amonts should only between 1 to 5")
          }
          
         
          return{
            ...c,
            amount:incresedamount
          }}else{
            return c
          }
        })
        return{
          ...state,
          cart:newupdate
        }
    }
    if (action.type==='decrease-amount') {
      let newupdate= state.cart.map((c)=>{
       if (c.id===action.payload){
        let incresedamount= c.amount-1
        if (incresedamount<1) {
          incresedamount = 1
          alert("amonts should only between 1 to 5")
        }
       
        return{
          ...c,
          amount:incresedamount
        }}else{
          return c
        }
      })
      return{
        ...state,
        cart:newupdate
      }
  }
    if (action.type=== "remove") {
      let updatedCart = state.cart.filter((c)=>c.id!==action.payload)
      return{
        ...state,
        cart:updatedCart,
      }
    }
  if (action.type=== "cart_remover") {
    return{
      ...state,
      cart:[],
    }
    
  }
  if (action.type==="total-items") {
    let updateditems= state.cart.reduce((i,c)=>{
       let{amount}= c
       i=i+ amount
       return i
    },0)
    return{
      ...state,
      totalitem:updateditems
    }
  }
  
  
  return state
}

export default Cartreducer