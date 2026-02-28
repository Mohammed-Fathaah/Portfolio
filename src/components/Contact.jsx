import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub,FaLinkedin,FaEnvelope } from "react-icons/fa";

function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_bb1uxtm",
                "template_imxiv4a",
                form.current,
                "ptnGlr3CA1kg4yKh6"
            )
            .then(()=>{
                alert("Message Sent Successfully!!");
                form.current.reset();
            },
            (error)=> {
                alert("Failed to send message.");
                console.log(error);
            }
        );
    }

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

                {/* Contact form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-6 mb-10">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800" />
                    <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800" />
                    <textarea name="title" placeholder="Your Message" rows="4" required className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
                </form>
                {/* Icons div */}
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