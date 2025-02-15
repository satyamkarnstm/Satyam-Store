import styled from "styled-components";

function Contact() {
   
    return (
        <Wrapper>
        <div className="main">
            <h2>Please send me your views about my this project</h2>
            <form action="https://formspree.io/f/mwpkdbwk" method="POST">
            <fieldset>
           <label>Name</label><sup>*</sup><br/>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="off"
                />
                <br />
                <label>Email</label><sup>*</sup><br/>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                />
                <br />
                <label>Company name</label><br/>
                <input
                    type="text"
                    name="company name"
                    
                    autoComplete="off"
                />
                <br />
                <label>your message</label><sup>*</sup><br/>
                <textarea
                    name="message"
                    placeholder="type your message here"
                    required
                    autoComplete="off"
                ></textarea>
                <br />

                <button type="submit">Send</button>
                </fieldset>
            </form>
        </div>
        </Wrapper>
    );
}
export default Contact;



const Wrapper= styled.section`
text-align: center;
  .main{
margin-left: 5px;
  
}
   
input{
    margin-bottom: 25px;
   
}
textarea{
    height: 75px;
 
}
button{
  padding: 5px 20px;
    text-align: center;
    margin-right: 90px;
}
sup{
    height: 200px;
    color: red;
}
form{
    background-color: rgba(177, 234, 234, 0.073);
}  

`