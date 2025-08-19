import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';


const projectsData = [
  {
    id: 1,
    title: 'mini-ecommerce-collaboration',
    description: 'My Simple Store web app.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/1200x/af/14/c1/af14c13bbd6fd36dbaf9b362f43a02c9.jpg',
    github: 'https://github.com/warintornkhrueainta/mini-ecommerce.git',
    demo: 'https://warintornkhrueainta.github.io/mini-ecommerce/'
  },
  {
    id: 2,
    title: 'my-weather-app',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/1200x/ab/38/e7/ab38e7f801c78a83884355161c78038d.jpg',
    github: 'https://github.com/Nathaphab/my-weather-app.git',
    demo: 'https://nathaphab.github.io/my-weather-app/'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website showcasing projects and skills.',
    technologies: ['html', 'css', 'javascript'],
    image: 'https://i.pinimg.com/736x/8c/d5/d9/8cd5d90c847ad13b4e2de395448a31bb.jpg',
    github:'https://github.com/Nathaphab/portfolio_website_development.git',
    demo: 'https://nathaphab.github.io/portfolio_website_development/'
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');

  const allTechnologies = ['All', ...new Set(
    projectsData.flatMap(project => project.title)
  )];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project =>
      project.title.includes(filter)
    );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects.
        </p>

        <div className="filter-controls">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;