import Pics from '../../assets/DP.jpg';
import styles from './About.module.css';
import SocialIcon from '../../components/SocialIcon';

export default function About() {
  const techs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Adobe Photoshop',
    'Adobe Illustrator',
  ];

  return (
    <section className={`about ${styles.about_me}`}>
      <div className={styles.about_bio}>
        <img
          className={styles['display-pic']}
          src={Pics}
          alt="Display picture"
        />
        <h3 className={styles.name}>Okechukwu Chidera</h3>

        <ul className={styles.about_tech}>
          <span>Stack: </span>
          {techs.map((tech, i) => (
            <li key={i} className={styles.tools}>
              {tech}
            </li>
          ))}
        </ul>

        <p>
          I'm a front-end developer who builds responsive web applications with
          HTML, CSS, JavaScript and frameworks such as React. Occasionally, I
          design graphics, flyers and logos 
        </p>
        <SocialIcon />
      </div>

      <div className={styles['about-details']}>
        <h2 className={styles.heading}>About Me</h2>

        <p>
          Hello world, I'm a multi-talented individual whose passion and
          expertise have taken them on an inspiring journey across diverse
          domains.
        </p>

        <p>
          As a Front End Developer, OdecoGlobal brings websites to life with an
          enchanting blend of code and design. With an innate understanding of
          user experience I can seamlessly merge form and function, transforming
          mere websites into captivating online experiences.
        </p>
        <p>
          As a Graphic Designeer, I have the rare ability to turn ideas into
          compelling visual masterpieces. My portfolio is an ever-expanding
          gallery of digital art that never fails to mesmerize.
        </p>
        <p>
          I'm also a Logo Designer par excellence. Understanding the
          significance of a strong brand identity, I have the skill to
          encapsulate the very essence of a company's values and vision within a
          single, impactful logo. Each stroke and curve is infused with meaning,
          making their logos an unforgettable symbol of a company's story and
          purpose.
        </p>
        <div>
          <a
            href="mailto:odecoglobal@gmail.com"
            className={`btn-link ${styles.btn_about}`}
            target="_blank"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
