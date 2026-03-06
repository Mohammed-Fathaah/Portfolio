import ThemeToggle from "./ThemeToggle";
function Navbar(){
    return (
        <nav className="fixed w-full top-0 justify-between items-center px-6 md:px-10 py-4 bg-white dark:bg-black shadow z-40">

         <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="font-bold text-lg md:text-xl"><span className="text-gray-800 dark:text-white">Mohammed</span><span className="text-purple-500 dark:text-purple-500">Fathaah</span></h1>

            <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="hover:text-blue-500 transition">About</a>
                <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
                <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
           <div className="flex items-center gap-3">
            <ThemeToggle />
           </div> 
         </div>
        </nav>
    );
}
export default Navbar;