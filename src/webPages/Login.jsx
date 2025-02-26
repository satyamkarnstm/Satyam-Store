import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"


function Login() {
const [form, setForm]=useState()
const[password,setPassword]=useState('')
const [passordErrors, setPasswordErrors]= useState('')
const [conPassError, setConPassError]=useState('')
const navigate=useNavigate()
const formHandler =()=>{
    setForm(!form)
}
const passwordHanler=(event)=>{

let    a =  (event.target.value)


 setPassword(a)
 var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    // eslint-disable-next-line 
    var char = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
   
 if (a.length<3) {
    setPasswordErrors('password must in uppercase, lowercase, number and special charaters')
 } 
else  if (!a.match(upperCase)) {
    setPasswordErrors("Password should contains uppercase letters!")}
 else if (!a.match(lowerCase)) {
       setPasswordErrors("Password should contains lowercase letters!")}
  else   if (!a.match(numbers)) {
       setPasswordErrors("Password should contains number!")}
       else   if (!a.match(char)) {
        setPasswordErrors("Password should contains one special charaters!")}
    
    else  if (a.length<8) {
        
        setPasswordErrors('password should atleast 8 digits')
      }else if(a.length>=8){
        setPasswordErrors('')
      }
     }
     const conPassHandler =(event)=>{
     let   a= (event.target.value)
    
   
     if (a===password) {
        setConPassError('')
     } else {
        setConPassError('password doesnot  matched')
     }
    
     }
    const signupHandler=(event)=>{
        event.preventDefault();
        if (passordErrors.length >5) {
             alert('your password doesnot full fill all condition')
            return}
        if (conPassError.length>2) {
            return alert('your password is not matched with confirm password')}
             else {
                alert('thanks for signup')
           }
           navigate('/')
    }
    const loginhandler=(event)=>{
        event.preventDefault();
        alert('Thanks for log in')
        navigate('/')
    }
      

    return(
        <Wrapper>
        <div className="log">
       {
        form?
        <form onSubmit={loginhandler} >
            <h3>Login</h3>
   <label htmlFor="email">Email: </label>
    <input type="email" name="email" placeholder="email"required autoFocus/><br/> 
    <label htmlFor="password" >Password: </label>
    <input type="password" placeholder="password" name="password" required/><br/>
    <button type="submit">Log in</button><br/><hr/>
    <span>Don't have an account? </span>
    <button type="button" onClick={formHandler}>signup</button>
</form>

      :



<form onSubmit={signupHandler}>
<fieldset>

<h3>Sign up</h3>
<label htmlFor="name">name: </label>
<input type="text" name="name" required autoFocus placeholder="name"/><br/>
<label htmlFor="email">email: </label>
<input type="email" name="email" required placeholder="email"/><br/>
<label>Gender: </label>
<input type="radio" name="gender" value='male' /> <label>male</label>
<input type="radio" name="gender" value='female' /> <label>female</label>
<input type="radio" name="gender" value='others' /> <label>others</label><br/>

<label>birthday: </label>
<input type="date" name=" date" required/><br/>

<label htmlFor='password'>password: </label>
<input type="password" name="password" required placeholder="password"value={password} onChange={passwordHanler} className="pass"/>
<div className="pasError">{passordErrors}</div> <br/>
<label htmlFor='password'>confirm password: </label>
<input type="password" name="password" required placeholder="password"  onChange={conPassHandler}  className="pass"/><br/>
<div className="pasError">{conPassError}</div><br/>
<button type="submit">Sign up</button><br/><hr/>
<div> Already have an account?   <button type="button" onClick={formHandler}>log in</button></div>
</fieldset>
</form>
 }
 </div>
 </Wrapper>
    )
}
export default Login



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