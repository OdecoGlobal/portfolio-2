import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';
export default function ProjectDetails({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map(project => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <div className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.detail}>
              {project.details.substring(0, 120)} ...
            </p>
            <ul>
              {project.stack.map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
