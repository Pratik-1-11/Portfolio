import React from 'react';

interface SkillProps {
  name: string;
}

const SkillCard: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300">
      {name}
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript'];
  const backendSkills = ['PHP', 'Node.js', 'Firebase'];
  const databaseSkills = ['SQL', 'MySQL'];
  const otherTools = ['Git', 'GitHub', 'VS Code', 'Postman'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've developed various technical skills throughout my journey as an IT student
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              {databaseSkills.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
              Other Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {otherTools.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;