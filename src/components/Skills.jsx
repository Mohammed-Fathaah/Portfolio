import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
    FaNodeJs,
    FaGitAlt,
    FaDocker
} from "react-icons/fa";

import {
    SiDjango,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiFlask,
    SiJsonwebtokens,
    SiRazorpay
} from "react-icons/si";

const skills = [
    { name: "HTML",icon:<FaHtml5 /> },
    { name: "Tailwind",icon:<SiTailwindcss /> },
    { name: "CSS",icon:<FaCss3Alt /> },
    { name: "Python",icon:<FaPython /> },
    { name: "Javascript",icon:<FaJs /> },
    { name: "React",icon:<FaReact /> },
    { name: "Django",icon:<SiDjango /> },
    { name: "Redux Toolkit",icon:<SiRedux /> },
    { name: "Flask",icon:<SiFlask /> },
    { name: "Node.js",icon:<FaNodeJs /> },
    { name: "MongoDB",icon:<SiMongodb /> },
    { name: "PostgreSQL",icon:<SiPostgresql /> },
    { name: "JWT",icon:<SiJsonwebtokens /> },
    { name: "Razorpay",icon:<SiRazorpay /> },
    { name: "Git",icon:<FaGitAlt /> }
];

function Skills(){
    return (
        <section id="skills"
        className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-black transition-colors duration-300">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            { skills.map((skill,index)=>(
                <motion.div key={index}
                initial={{ opacity:0,y:60 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5,delay:index*0.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer">

                    <div className="text-4xl mb-4 text-blue-500">{skill.icon}</div>
                    <p className="font-semibold">{skill.name}</p>
                </motion.div>
            ))}
        </div>
        </section>
    );
}

export default Skills;