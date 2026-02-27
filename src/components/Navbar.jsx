import ThemeToggle from "./ThemeToggle";
function Navbar(){
    return (
        <nav className="fixed w-full top-0 justify-between items-center p-6 bg-white dark:bg-black shadow z-40">
            <h1 className="font-bold text-xl">My Portfolio</h1>

            <div className="flex items-center gap-6">
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#skills" className="hover:text-blue-500">Skills</a>
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
            <ThemeToggle />
        </nav>
    );
}
export default Navbar;