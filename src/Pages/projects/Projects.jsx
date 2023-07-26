import React from 'react';
import styles from '../../components/ProjectDetails.module.css';
import ProjectDetails from '../../components/ProjectDetails';
import loadingLogo from '../../assets/MyLogo.svg'

export default function Projects({ projects, error, isPending }) {
  return (
    <section className={`${styles.projectList} ${styles.project}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <img src={loadingLogo} className="loading"/>}
      {projects && <ProjectDetails projects={projects} />}
    </section>
  );
}
