import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experienceData: ExperienceItemProps[] = [
  {
    role: "Web Development Intern",
    company: "TechNepal Solutions",
    duration: "Jun 2022 - Aug 2022",
    description: "Worked in a team to develop and maintain web applications for clients, focusing on frontend development and database integration.",
    responsibilities: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript",
      "Integrated backend APIs with frontend components",
      "Participated in code reviews and team meetings",
      "Assisted in database design and implementation"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "Jan 2021 - Present",
    description: "Developed custom websites and web applications for small businesses and individual clients.",
    responsibilities: [
      "Designed and implemented responsive websites from scratch",
      "Maintained ongoing relationships with clients for updates and improvements",
      "Created database schemas and implemented backend functionality",
      "Handled hosting setup and domain configuration"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Firebase"]
  }
];

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  role, 
  company, 
  duration, 
  description, 
  responsibilities, 
  technologies 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{role}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
            <Briefcase size={16} className="mr-2" />
            <span>{company}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
            <Calendar size={16} className="mr-2" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Key Responsibilities:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceItem 
              key={index} 
              {...experience} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;