import { useEffect,useState } from "react";

function ScrollProgress(){
    const [scroll,setScroll]=useState(0);

    const handleScroll = () => {
        const totalHeight = document.getElement.scrollHeight - document.getElement.clientHeight;

        const scrollPosition = window.scrollY;
        setScroll((scrollPosition/totalHeight)*100);
    };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[]);

    return (
        <div className="fixed top-0 left-0 h-1 bg-blue-500 z-50" style={{ width:`${scroll}%`}} />
    );
}

export default ScrollProgress;