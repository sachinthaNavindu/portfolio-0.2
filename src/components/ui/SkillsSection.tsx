import {
  FaJava,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiSpringboot,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      name: "Java",
      icon: <FaJava className="text-red-600" />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: "Advanced",
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      level: "Intermediate",
    },
    {
      name: "React Native",
      icon: <FaReact className="text-blue-400" />,
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: <FaNode className="text-green-500" />,
      level: "Advanced",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700" />,
      level: "Intermediate",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-400" />,
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
      level: "Advanced",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-600" />,
      level: "Intermediate",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      level: "Intermediate",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-400" />,
      level: "Advanced",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      level: "Advanced",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" />,
      level: "Intermediate",
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 sm:right-20 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full pb-8 sm:pb-12 lg:pb-16 flex justify-center relative z-10">
        <div className="text-center">
          <h2
            className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            style={{ lineHeight: "1.35em" }}
          >
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-2 sm:mt-3 lg:mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 lg:mt-4">
            Technologies I work with
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-400 rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative flex flex-col items-center p-3 sm:p-4 md:p-5 lg:p-6 bg-black/50 border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-white font-semibold text-xs sm:text-sm text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
