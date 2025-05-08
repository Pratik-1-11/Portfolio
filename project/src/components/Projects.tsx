import React from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

interface ProjectsProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const projectData: ProjectProps[] = [
  {
    id: 1,
    title: "Gym Management System",
    description: "A comprehensive gym management solution for tracking memberships, scheduling classes, and managing trainers.",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web App", "Frontend", "Backend"],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Jhandi Burja - Nepali Dice Game",
    description: "Digital version of the traditional Nepali dice game, featuring authentic rules and multiplayer capabilities.",
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Game", "Frontend"],
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Disaster Management & Alert App",
    description: "Real-time disaster management application for Nepal, providing alerts and emergency resources during natural disasters.",
    image: "https://images.pexels.com/photos/4050399/pexels-photo-4050399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Mobile App", "Frontend", "Backend"],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Aviator Game Clone",
    description: "A clone of the popular Aviator crash betting game with realistic physics and animations.",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-reach-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Game", "Frontend"],
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#"
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  category, 
  techStack, 
  demoLink, 
  githubLink 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-fadeIn">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary-500 transition-colors duration-300 text-white">
              <GitHub size={20} />
            </a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary-500 transition-colors duration-300 text-white">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {category.map((cat, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              {cat}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = ['all', 'Web App', 'Mobile App', 'Game', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;