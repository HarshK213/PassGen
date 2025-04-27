import React, { useState } from "react";

const Theme = () => {
    const [theme, settheme] = useState('light');
    const handleTheme = () => {
        if(theme == 'light') settheme('dark');
        else settheme('light');
    }

    return(
        <>
            <button onClick={handleTheme} 
                    className="size-10 absolute right-10 top-8 border-[1px] rounded-xl p-1.5"        
            >
                {theme == 'light'?<img src="https://img.icons8.com/?size=100&id=45474&format=png&color=FFFFFF" alt="" /> : <img src="https://img.icons8.com/?size=100&id=9313&format=png&color=000000" alt="" />  }
            </button>
        </>
    )
}

export default Theme;