import { useState,useEffect } from "react";

function ThemeToggle(){
    const[dark,setDark] = useState(()=>{
        return localStorage.getItem("theme") === "dark";
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
        className="px-1 py-1 text-sm md:px-4 md:py-2 md:text-base bg-gray-800 text-white rounded-lg">
        {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export default ThemeToggle;