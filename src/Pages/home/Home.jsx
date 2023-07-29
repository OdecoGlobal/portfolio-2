import { useEffect, useState } from 'react';

// component
import ProjectDetails from '../../components/ProjectDetails';
import SocialIcon from '../../components/SocialIcon';

// styles
import styles from './Home.module.css';

export default function Home({ projects, isPending, error }) {
  const mySkills = [
    `I develop web apps`,
    `I design logos`,
    `I design graphics `,
  ];

  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkillIndex(prevIndex => (prevIndex + 1) % mySkills.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [mySkills.length]);

  return (
    <section className="home">
      <div className={styles.profile}>
        <p className={styles.intro}>Hello, my name is</p>
        <h2 className={styles.name}>Okechukwu Chidera</h2>
        <p className={styles.skill}>FrontEnd developer</p>

        {mySkills.map((skill, index) => (
          <h3
            key={index}
            className={`${styles.subheading} ${
              index === skillIndex ? styles['active'] : ''
            }`}
          >
            {skill}
          </h3>
        ))}

        <p className={styles.bio}>
          I’m a front-end developer who builds responsive web applications with
          HTML, CSS, JavaScript and frameworks such as React. Occasionally, I
          design graphics, flyers and logos
        </p>
        <SocialIcon />
      </div>
      <div className={styles.projectSnippet}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {projects && <ProjectDetails projects={projects} />}
      </div>
    </section>
  );
}
