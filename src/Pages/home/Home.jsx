import { useEffect, useState } from 'react';

// component
import ProjectDetails from '../../components/ProjectDetails';
import githubLogo from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import twitterLogo from '../../assets/twitter.svg';

// styles
import styles from './Home.module.css';

export default function Home({ projects, isPending, error }) {
  const logoArray = [
    {
      src: githubLogo,
      href: 'https://github.com/OdecoGlobal',
      name: 'github logo',
    },
    {
      src: linkedinLogo,
      href: 'https://www.linkedin.com/in/okechukwu-chidera',
      name: 'linkedin logo',
    },
    {
      src: twitterLogo,
      href: 'https://twitter.com/M_Derah',
      name: 'twitter logo',
    },
  ];
  const mySkills = [
    `I develop web applications`,
    `I design web applications`,
    `I design graphics & logos`,
    `I'm a Biomedical Scientist`,
  ];

  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkillIndex(prevIndex => (prevIndex + 1) % mySkills.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [mySkills.length]);

  return (
    <section className={styles.home}>
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
          design websites and graphics even logos too.
        </p>

        <div className={styles.logoimg}>
          {logoArray.map((icon, i) => (
            <a href={icon.href} key={i}>
              <img className={styles.logoIcon} src={icon.src} alt={icon.name} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.projectSnippet}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {projects && <ProjectDetails projects={projects} />}
      </div>
    </section>
  );
}
