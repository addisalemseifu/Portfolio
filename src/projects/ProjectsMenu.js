/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import classNames from 'classnames';
import projects from './projectsData';
import '../styles/projectsMenu.css';

export default function ProjectsMenu() {
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const renderContent = (projects) => projects.map((project, index) => (
    <div key={Math.random()} className={`project-sub-container-${index + 1}`}>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <div>{project.description}</div>
      <div className="link-container">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          DEMO
        </a>
      </div>
    </div>
  ));

  const projectItems = ['PROJECT ONE', 'PROJECT TWO', 'PROJECT THREE'];

  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={Math.random()}
            className={classNames('project-item', {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent([projects[activeProject]])}
      </div>
    </div>
  );
}
