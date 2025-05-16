import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
      const projectList = [
    {
      title: 'Todo App',
      description: 'A simple task manager using React and localStorage.',
      link: 'https://github.com/yourname/todo-app'
    },
    {
      title: 'E-commerce UI',
      description: 'An online store layout using React and Bootstrap.',
      link: 'https://github.com/yourname/ecommerce-ui'
    },
  ];

  return (
  <div className="projects">
      <h2>My Projects</h2>
      {projectList.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  )
}

export default Projects
