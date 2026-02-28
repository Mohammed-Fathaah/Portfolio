import { motion } from "framer-motion";
import { FaGithub,FaLinkedin,FaEnvelope } from "react-icons/fa";

function Contact(){
    return (
        <section id="contact"
        className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-black transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

            <motion.div
             initial={{ opacity:0,y:60}}
             whileInView={{ opacity:1,y:0 }}
             viewport={{ once:true }}
             transition={{ duration:0.6 }}
             className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-lg">
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">I'm open to Full Stack opportunities.Let's connect!</p>

                <div className="flex justify-center gap-8 text-3xl">
                    <a 
                     href="https://github.com/Mohammed-Fathaah"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-blue-500 transition">
                        <FaGithub />
                     </a>
                     
                     <a 
                      href="https://www.linkedin.com/in/mohammed-fathaah-203307313/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition">
                        <FaLinkedin />
                      </a>

                      <a 
                       href="mailto:mohammedfathaah777@gmail.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-blue-500 transition">
                        <FaEnvelope />
                       </a>
                </div>
             </motion.div>
        </section>
    );
}
export default Contact;