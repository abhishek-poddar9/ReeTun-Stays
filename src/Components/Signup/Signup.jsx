import './Signup.css'
import { MdPersonAddAlt1 } from "react-icons/md";


function Signup() {
  return (
    <div id='signup' onSubmit={(e)=>{
      
        alert("SignUp Successfully....")
      
    }}>
       <form action="">
        <span id='signuptitle'>Sign Up Page</span>
        <div className="list">
        <label htmlFor="name">UserName</label>
        <input type="text" id='name' required/>  
           </div> 
        <div className="list">
        <label htmlFor="email">Email</label>
        <input type="text" id='email' required/>  
           </div> 
           
            <div className="list">
        <label htmlFor="conpass1">Confirm Password</label>
        <input type="password" id='conpass1' required/>  
           </div> 
           <button id='signupbtn'>SignUp<MdPersonAddAlt1 />
</button>
      </form>

    </div>
  )
}

export default Signup
