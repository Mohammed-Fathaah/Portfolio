import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Hero(){
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <motion.h1
                initial={{ opacity:0,y:-50 }}
                animate={{ opacity:1,y:0 }}
                transition={{ duration:1 }}
                className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">Hi, I'm {" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Mohammed Fathaah</span>
                </motion.h1>

                <TypeAnimation sequence={[
                    "Python Full Stack Developer",
                    2000,
                    "React Developer",
                    2000,
                    "Django Backend Developer",
                    2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-lg md:text-2xl text-blue-500 mt-4"
                />
                <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300">Building modern web applications using React and Django.</p>
             <div className="mt-8 flex gap-4">
                <a 
                 href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View Projects</a>
                <a 
                 href="/fathaahresume.pdf" download className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">Download Resume</a>
             </div>
        </section>
    );
}
export default Hero;