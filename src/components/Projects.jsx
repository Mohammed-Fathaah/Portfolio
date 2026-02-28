import { motion } from "framer-motion";

const projects = [
    {
        title:"Game Account Trading Platform",
        description:"Full Stack project using React & Django with Razorpay integration.",
        tech:"React,Django,PostgreSQL",
        live:"",
        code:"https://github.com/Mohammed-Fathaah/Game_Account_Trading_Platform"
    },
    {
        title:"Portfolio Website",
        description:"Personal portfolio built with React,Tailwind & Framer Motion.",
        tech:"React,Tailwind",
        live:"",
        code:"https://github.com/Mohammed-Fathaah/Portfolio"
    }
];

function Projects(){
    return(
        <section id="projects" className="min-h-screen px-6 py-20 bg-white dark:bg-black transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project,index)=>(
                    <motion.div key={index}
                     initial={{ opacity:0,y:60 }}
                     whileInView={{ opacity:1,y:0 }}
                     viewport={{ once:true }}
                     transition={{ duration:0.5,delay:index*0.2 }}
                     className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                        <p className="text-sm text-blue-500">{project.tech}</p>

                        <div className="mt-4 flex gap-4">
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white transition">Code</a>
                        </div>
                     </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;