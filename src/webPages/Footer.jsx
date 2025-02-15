import { FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";
function Footer() {
    
    return(
      <Wrapper>
        <div className="footer">
     <div className="information">
        <div>
       <h2>MY INTRODUCTION</h2>
       <h4>Name</h4><span className="value">Satyam Kumar</span><br/>
       <h4>Distric</h4><span className="value">Sitamarhi</span><br/>
       <h4>State</h4><span className="value">Bihar</span><br/>

       </div>
       <div>
        <h2>MY CONTACTS </h2>
       <h4>Email</h4><span className="value">satyamkarnstm@gmail.com</span><br/>
       <h4>Linkdin </h4><span className="value"><a href="https://www.linkedin.com/in/satyam-kumar-a2375522a" target="blank">  <FaLinkedin/>Satyam Kumar</a><br/></span>
       
   
      
       
       </div>
       </div>
       <div className="disclaimer">
       <h4>Disclaimer</h4 ><span className="value">My this project is dummy, only for shows my skills</span></div>
    </div>
    </Wrapper>
 )
}
export default Footer


const Wrapper= styled.section`
  .footer{
    background-color: rgb(194, 209, 212);
    
}
.information{
    display: grid;
    gap: 10px;
    grid-template-columns:repeat(2,2fr);
}
h4{
    display: inline;
}
.value{
    margin-left: 25px;
}
.disclaimer{
    text-align: center;
    background-color: brown;
}
.log{
    margin-left:  20px;
    text-align: center;
}
.pasError{
    color: green;
    margin-bottom: 0px !important;
}
.pass{
    margin-bottom: 0px;
}
@media only screen and (max-width: 768px) {
    .information{
        grid-template-columns:repeat(1,2fr); 
    }
} 



`