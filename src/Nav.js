import React,{useEffect,useState} from 'react'
import "./Nav.css"
function Nav() {
    const[show,handleShow]=useState(false);
    
    useEffect(()=>{
     window.addEventListener("scroll",()=>{
         if(window.scrollY > 100){
           handleShow(true);
         }
         else handleShow(false);
     });
     return ()=>{
         window.removeEventListener("scroll");
     }
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo"
src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="netfixLogo"
/>
<img
className="nav__avatar" alt="Netflix__avatar"
 src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
        </div>
    )
}

export default Nav
