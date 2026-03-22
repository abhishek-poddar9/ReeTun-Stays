import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='footer'>
      <div className="footertop">
        <div className="box">
           <span id='contact1'>Contact Us</span> 
          <span>+910000000000</span>
          <span>abcd12345@gmail.com</span>
          <span>Address,city/india</span>
        </div>
        <div className="box">
            
            <span id='services'>Our Services</span>
             <span>Home</span>
             <span>Add Listing</span>
             <span>Rent</span>
        </div>
        <div className="box">
            <span id='Quick'>Quick Link</span>
            <span>Knowledge Base</span>
            <span>FAQ</span>
            <span>Contact</span>
        </div>
        <div className="box">
            <span id='logo'>Private Property Rental</span>
        <Link to={"/Contact"}><button>Contact Us</button></Link>
        </div>
      </div>
      <div className="footerbottom"></div>
      <span>Privacy Policy</span>
      <span>Use of terms</span>
    </div>
  )
}

export default Footer
