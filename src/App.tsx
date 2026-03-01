// App.jsx
import Navbar from './components/layout/Navbar';
import AboutSection from './components/ui/AboutSection';
import EducationSection from './components/ui/EducationSection';
import SkillsSection from './components/ui/SkillsSection';
import ProjectsSection from './components/ui/ProjectsSection';
import ContactSection from './components/ui/ContactSection';

function App() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="w-full overflow-hidden">
        <div className="pt-14 md:pt-16 lg:pt-20">
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection/>
        </div>
      </main>
      
    </div>
  );
}

export default App;