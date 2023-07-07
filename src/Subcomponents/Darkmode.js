import React from "react";

const  Darkmode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark"){
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
       else setLightMode()
    };
 
    return(
        <div className='dark_mode'>
            <input
            className='dark_mode_input'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                 <img className='dark' src= 'images/brightness.png' alt=""/>
                 <img className='sun' src= 'images/akar-icons_sun.png' alt=""/>
            </label>
        </div>

    )
}
export default  Darkmode;