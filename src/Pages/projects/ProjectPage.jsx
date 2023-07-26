import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import loadingLogo from '../../assets/MyLogo.svg';
// styles
import styles from './ProjectPage.module.css';

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const getProject = async () => {
      try {
        const projectRef = doc(projectFirestore, 'projects', id);
        const docSnap = await getDoc(projectRef);
        if (docSnap.exists()) {
          setIsPending(false);
          setProject(docSnap.data());
        } else {
          setError('No Project Loading');
          setIsPending(false);
        }
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    getProject();
  }, [id]);

  return (
    <section>
      {error && <p className="error">{error}</p>}
      {isPending && <img src={loadingLogo} className="loading" />}
      {project && (
        <div className={styles.project_card}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.detail}>{project.details}</p>
          <hr />
          <p className={styles.built}>This Project was built with</p>
          <ul>
            {project.stack.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>

          <a href={project.link} className="btn-link" target="_blank">
            View Project
          </a>
        </div>
      )}
    </section>
  );
}
