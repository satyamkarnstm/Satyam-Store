import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Rating({stars, review}) {
    const ratingStart= Array.from({length:5},(elem,index)=>{
        let number =index+0.5;
        return(
            <span key={index}>
               {stars >= index+1?(
                <FaStar/>
               ):stars >= number ?(
                <FaStarHalfAlt/>
               ):(
                <AiOutlineStar/>
               )}
            
            
             </span>
    )
})
    return(
    <div >
        {ratingStart}({stars})
    </div>
    )}
export default Rating