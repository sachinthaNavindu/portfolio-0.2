import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Otaku Score",
      description: `Rate • Review • Discover Anime
Otaku Score is a mobile app built with React Native and Expo that lets anime fans rate anime series/movies, write reviews, see community ratings, and manage their personal reviews.`,
      techStack: {
        Frontend: "React Native + Expo",
        Language: "TypeScript",
        Backend: "Firebase",
      },
      github: "https://github.com/sachinthaNavindu/otaku-score.git",
      deployed: "",
      color: "from-purple-500/20",
    },
    {
      name: "Drive Master",
      description: `Drive Master – Driving School Management System
Drive Master is a full‑stack application designed to automate and streamline key operations of a driving school.`,
      techStack: {
        Frontend: "Bootstrap + JavaScript",
        Backend: "Spring Boot + Java",
        Database: "MySQL",
      },
      github:
        "https://github.com/sachinthaNavindu/driving-Leaners-Platform.git",
      deployed: "",
      color: "from-blue-500/20",
    },
    {
      name: "HivGrid Backend",
      description: `HivGrid Backend – Node.js + TypeScript + Express API
This backend powers the HivGrid platform. It handles authentication, user profiles, posts, hire ads, and admin functionalities.`,
      techStack: {
        Runtime: "Node.js",
        Language: "TypeScript",
        Framework: "Express.js",
        Database: "MongoDB",
        Auth: "JWT + bcryptjs",
      },
      github: "https://github.com/sachinthaNavindu/HivGrid-BE.git",
      deployed: "",
      color: "from-green-500/20",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gray-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full pb-8 sm:pb-10 lg:pb-12 flex justify-center relative z-10">
        <div className="text-center">
          <h2
            className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            style={{ lineHeight: "1.35em" }}
          >
            Projects
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-2 sm:mt-3 lg:mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 lg:mt-4">
            Some of my recent work
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center relative z-10">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} to-gray-400/20 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000`}
              ></div>

              <div className="relative h-full bg-black/80 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm hover:bg-black/90 transition-all duration-300 p-4 sm:p-6 lg:p-8 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FaGithub size={20} className="sm:w-6 sm:h-6" />
                    </a>
                    {project.deployed && (
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt
                          size={18}
                          className="sm:w-5 sm:h-5"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm lg:text-base text-gray-400 mb-4 sm:mb-6 whitespace-pre-line leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="border-t border-white/10 pt-3 sm:pt-4">
                    <p className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {Object.entries(project.techStack).map(([key, value]) => (
                        <span
                          key={key}
                          className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
