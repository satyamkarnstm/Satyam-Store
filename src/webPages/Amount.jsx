import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import './cart.css'
function Amount(props) {

  return (
    <div>
      <FiMinusCircle onClick={props.decrease}/>
    {props.amount}
    
    <FiPlusCircle onClick={props.increase} />
    </div>
  )
}

export default Amount