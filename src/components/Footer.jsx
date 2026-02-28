import { FaGithub,FaLinkedin,FaEnvelope }from "react-icons/fa";

function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto text-center space-y-5">
                {/* Name */}
                <h2 className="text-xl font-semibold tracking-wide">Mohammed Fathaah</h2>
                {/* Short line */}
                <p className="text-gray-400 text-sm">Building modern web applications with React & Django</p>
                {/* Small Social Icons */}
            <div className="flex justify-center gap-6 text-lg opacity-70">
          
            <a
            href="https://github.com/Mohammed-Fathaah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition duration-300">
             <FaGithub />
            </a>
            <a
            href="https://www.linkedin.com/in/mohammed-fathaah-203307313/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mohammedfathaah777@gmail.com"
            className="hover:opacity-100 transition duration-300"
          >
            <FaEnvelope />
          </a>
            </div>
            {/* Divider */}
            <div className="border-t border-gray-700 pt-4 text-xs text-gray-500">
                © {new Date().getFullYear()}Mohammed Fathaah. All rights reserved.
            </div>
        </div>
        </footer>
    );
}

export default Footer;