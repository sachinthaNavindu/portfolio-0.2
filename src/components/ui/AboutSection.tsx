import TypingEffect from "../layout/TypingEffects";
import profileImg from "../../assets/WhatsApp Image 2026-02-25 at 15.44.34.jpeg";
import { FaBirthdayCake, FaMapMarkerAlt, FaUser, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold px-2">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Sachintha Navindu Fernando
            </span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-2 sm:mt-3 lg:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative group max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white/20 transform transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-sm sm:text-base text-gray-400">Get to know me better</p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed bg-white/5 p-3 sm:p-4 rounded-lg border-l-4 border-white/30">
                I am a Software Engineering student with a strong passion for
                coding and exploring emerging technologies. I have a keen
                interest in building backend APIs as well as developing
                intuitive and responsive frontend applications.
              </p>

              <div className="py-1 sm:py-2">
                <TypingEffect />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex flex-col items-center p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <FaUser className="text-xl sm:text-2xl text-white mb-1 sm:mb-2" />
                  <span className="font-semibold text-white text-sm sm:text-base">Age</span>
                  <span className="text-gray-300 text-xs sm:text-sm">22</span>
                </div>
                <div className="flex flex-col items-center p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <FaMapMarkerAlt className="text-xl sm:text-2xl text-white mb-1 sm:mb-2" />
                  <span className="font-semibold text-white text-sm sm:text-base">Location</span>
                  <span className="text-gray-300 text-xs sm:text-sm">Galle, Sri Lanka</span>
                </div>
                <div className="flex flex-col items-center p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <FaBirthdayCake className="text-xl sm:text-2xl text-white mb-1 sm:mb-2" />
                  <span className="font-semibold text-white text-sm sm:text-base">Birthdate</span>
                  <span className="text-gray-300 text-xs sm:text-sm">23 May 2003</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 lg:pt-6">
              <a
                href="https://www.linkedin.com/in/sachintha-navindu-fernando/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-blue-600/20 transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2 group-hover:text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold text-white hidden sm:block">LinkedIn</span>
              </a>

              <a
                href="https://github.com/sachinthaNavindu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-gray-600/20 transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2 group-hover:text-gray-400" />
                <span className="text-xs sm:text-sm font-semibold text-white hidden sm:block">GitHub</span>
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2 group-hover:text-gray-300">📁</div>
                <span className="text-xs sm:text-sm font-semibold text-white hidden sm:block">Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;