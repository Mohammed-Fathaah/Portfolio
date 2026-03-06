import myImage from "../assets/myphoto.jpg";

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left side - image */}
                <div>
                    <img src={myImage} alt="About Me" className="w-full max-w-sm mx-auto rounded-2xl shadow-lg" />
                </div>
                {/* Right side - Text */}
                <div>
                    <h2 className=" text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">I'm a Python Full Stack Developer currently working as an intern after completing my training at Synnefo Solutions. I enjoy building scalable web applications using Django for backend development and React for modern user interfaces. I am currently working on real-world projects and continuously improving my skills in full-stack development.</p>
                    
                </div>
            </div>
        </section>
    );
}
export default About;