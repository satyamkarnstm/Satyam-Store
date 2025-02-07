

function reducer(state,action) {

    switch (action.type) {
        case 'loading':
            return{
                ...state,
                isloding:true 
            }
            
           case 'data':
                return{
                    ...state,
                    isloding:false,
                    product: action.payload, 
                }

                case "singleData":
                    return{
                        ...state,
                        isloding:false,
                        singleProducts: action.payload, 
                    }
               
               

            case 'error':
                return{
                    ...state,
                    isError: true
                }
                
               
    
        default:
            return state ;
    }
   
    
}
export default reducer