import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
  courses: string[];
}

const educationData: EducationItemProps[] = [
  {
    degree: "Bachelor in Computer Information System",
    institution: "Pokhara University",
    year: "2019 - 2023",
    description: "Comprehensive study of information technology fundamentals, programming, web development, and database management systems.",
    courses: [
      "Data Structures and Algorithms",
      "Web Programming",
      "Database Management Systems",
      "Software Engineering",
      "Mobile Application Development",
      "Computer Networks"
    ]
  },
  {
    degree: "Higher Secondary Education in Science",
    institution: "National School of Sciences",
    year: "2017 - 2019",
    description: "Focused on physics, chemistry, biology, and mathematics with an introduction to computer science.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science"
    ]
  }
];

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  year, 
  description, 
  courses 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{degree}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
            <BookOpen size={16} className="mr-2" />
            <span>{institution}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
            <Calendar size={16} className="mr-2" />
            <span>{year}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div>
        <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Relevant Coursework:</h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <span 
              key={index} 
              className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <EducationItem 
              key={index} 
              {...education} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;