import { useState } from 'react'; 
import Darkmode from '../Subcomponents/Darkmode';

const Navbar = () => {
    const [isShow, setisShow] = useState(false);  

    const toggleMenu =() => {
        setisShow(!isShow);
    
    } 

    return(
        <>
        <nav className="navbar" id="navbar">

                   <img src= 'images/resellme-logo 2.png' alt=""/>
                    <ul className={`menu ${isShow ? "show" : ""}`}>
                        <li>Docs</li>
                        <li>Blogs</li>
                        <li>About Us</li>
                        <li>Support <img src= 'images/arrowOut.png' alt=""/></li>
                        <li>Portal <img src= 'images/arrowOut.png' alt=""/></li>
                        <li>Register  <img src= 'images/arrowOut.png' alt=""/></li>
                        <Darkmode/>
                    </ul>

                    <div className="navall">
                        <p>Menu</p>
                        <div className={`hamburger ${isShow ? "open" : ""}`} onClick={toggleMenu}>
                             <span></span>
                            <span></span>
                            <span></span> 
                        </div> 
                    </div>  
                    
        </nav>

        <nav className="navbar1" id="navbar1">
            <div className="first-nav">
                <img className='img1' src= 'images/resellme-logo 2.png' alt=""/>
                <ul className='navlist'>
                <li>Docs</li>
                <li>Blogs</li>
                <li>About Us</li>
                </ul>
            </div>
           
                <ul className='navlist'>
                   
                    <li>Support <img src= 'images/arrowOut.png' alt=""/></li>
                    <li>Portal <img src= 'images/arrowOut.png' alt=""/></li>
                    <li>Register  <img src= 'images/arrowOut.png' alt=""/></li>
                </ul>
        </nav>
        </>
    );
}

export default Navbar; 