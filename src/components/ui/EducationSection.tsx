import institute from "../../assets/download.png";
import schoolImg from "../../assets/images.png";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 border border-white/20 rounded-full"></div>
      </div>

      <div className="w-full pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12 flex justify-center relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-2 sm:mt-3 lg:mt-4"></div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-400 to-transparent"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10"></div>

              <div className="w-full md:w-1/2 md:pr-8">
                <div className="bg-white/5 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group ml-8 md:ml-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center">
                      <FaSchool className="text-black text-sm sm:text-base lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                        GCE O/L & A/L
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        2009 - 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={schoolImg}
                      alt="St. Aloysius College Galle"
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain rounded-full bg-white"
                    />
                    <span className="text-xs sm:text-sm lg:text-base text-gray-300">
                      St. Aloysius College, Galle
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10"></div>

              <div className="w-full md:w-1/2 md:ml-auto md:pl-8">
                <div className="bg-white/5 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group ml-8 md:ml-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center">
                      <FaGraduationCap className="text-black text-2xl lg:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                        Undergraduate in Software Engineering
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        2024 - Present
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={institute}
                      alt="IJSE Institute of Software Engineering"
                      className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 object-cover rounded-full"
                    />
                    <span className="text-xs sm:text-sm lg:text-base text-gray-300">
                      IJSE Institute of Software Engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
