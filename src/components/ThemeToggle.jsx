import { useState,useEffect } from "react";

function ThemeToggle(){
    const[dark,setDark] = useState(()=>{
        return localStorage.getItem("theme") === "light";
    });

    useEffect(()=>{
        const html = document.documentElement;

        if(dark) {
            html.setAttribute("data-theme","dark");
            localStorage.setItem("theme","dark")
        } else {
            html.removeAttribute("data-theme");
            localStorage.setItem("theme","light")
        }
    },[dark]);

    return (
        <button onClick={()=>setDark(!dark)}
        className="px-4 py-2  bg-gray-800 text-white rounded-lg flex">
        {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export default ThemeToggle;