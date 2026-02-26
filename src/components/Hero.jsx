import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Hero(){
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <motion.h1
                initial={{ opacity:0,y:-50 }}
                animate={{ opacity:1,y:0 }}
                transition={{ duration:1 }}
                className="text-5xl font-bold">Hi, I'm Fathaah</motion.h1>

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
                className="text-2xl text-blue-500 mt-4"
                />
        </section>
    );
}
export default Hero;