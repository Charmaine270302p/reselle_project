import { useState } from 'react'; 


const Navbar = () => {
    const [isShow, setisShow] = useState(false);  
   /*  const [isOverlayVisible, setIsOverlayVisible] = useState(false); */

    const toggleMenu =() => {
        setisShow(!isShow);
       /*  setIsOverlayVisible(!isOverlayVisible); */
    } 



    return(
        <nav className="navbar" id="navbar">
             {/*  {isOverlayVisible && <div className="overlay" onClick={toggleMenu}></div>} */}

                   <img src= 'images/resellme-logo 2.png' alt=""/>
                    <ul className={`menu ${isShow ? "show" : ""}`}>
                        <li>Docs</li>
                        <li>Blogs</li>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Portal</li>
                        <li>Register</li>
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
    );
}

export default Navbar; 