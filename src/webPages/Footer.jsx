import { FaLinkedin } from "react-icons/fa6";
import './footer.css'
function Footer() {
    
    return(
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
 )
}
export default Footer