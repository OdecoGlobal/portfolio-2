import React from 'react';
import styles from './SocialIcon.module.css';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import twitterLogo from '../assets/twitter.svg';

export default function SocialIcon() {
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
  return (
    <div className={styles.logoimg}>
      {logoArray.map((icon, i) => (
        <a href={icon.href} key={i} target="_blank">
          <img className={styles.logoIcon} src={icon.src} alt={icon.name} />
        </a>
      ))}
    </div>
  );
}
