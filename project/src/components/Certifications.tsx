import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential: string;
}

const certificationData: CertificationItemProps[] = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "January 2022",
    description: "Comprehensive course covering HTML, CSS, JavaScript, Node.js, and database integration for full-stack web development.",
    credential: "#"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "March 2022",
    description: "In-depth study of JavaScript algorithms, data structures, and problem-solving techniques.",
    credential: "#"
  },
  {
    title: "PHP & MySQL Development",
    issuer: "Coursera",
    date: "August 2021",
    description: "Focused course on building dynamic websites and applications using PHP and MySQL databases.",
    credential: "#"
  },
  {
    title: "Git and GitHub for Version Control",
    issuer: "LinkedIn Learning",
    date: "May 2021",
    description: "Comprehensive training on version control using Git and GitHub for collaborative software development.",
    credential: "#"
  }
];

const CertificationItem: React.FC<CertificationItemProps> = ({ 
  title, 
  issuer, 
  date, 
  description, 
  credential 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 animate-fadeIn">
      <div className="flex items-start gap-4">
        <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-500 dark:text-primary-400">
          <Award size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{issuer}</p>
          <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1 mb-3">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <a 
            href={credential} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
          >
            View Credential <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificationData.map((certification, index) => (
            <CertificationItem 
              key={index} 
              {...certification} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;