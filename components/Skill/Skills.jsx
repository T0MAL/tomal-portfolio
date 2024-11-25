import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      'C/C++',
      'Python (pandas, numpy, matplotlib, scikit-learn, TensorFlow, PyTorch)',
      'Java',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML/CSS',
      'LaTeX',
    ],
  },
  {
    category: 'Frameworks/Technologies',
    items: [
      'Next.js',
      'React',
      'FastAPI',
      'TailwindCSS',
      'Django',
      'OpenCV',
      'Git/GitHub',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'OracleDB'],
  },
  {
    category: 'Tools/Technologies',
    items: ['Unix Shell', 'VS Code', 'Postman', 'Docker'],
  },
  {
    category: 'Other Skills',
    items: [
      'Machine Learning (Linear Algebra, Calculus, Probability)',
      'Computer Vision',
      'Natural Language Processing',
      'Problem Solving',
      'REST API Development',
    ],
  },
];

const Skills = () => {
  return (
    <div className="px-10 md:px-28 flex flex-col">
      {/* <p className="text-2xl font-bold mb-4">Skills</p> */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">{skill.category}</p>
            <div className="flex flex-wrap">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;