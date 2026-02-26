import ThemeToggle from "./ThemeToggle";
function Navbar(){
    return (
        <nav className="fixed w-full top-0 justify-between items-center p-6 bg-white dark:bg-black shadow z-40">
            <h1 className="font-bold text-xl">Fathaah</h1>
            <ThemeToggle />
        </nav>
    );
}
export default Navbar;