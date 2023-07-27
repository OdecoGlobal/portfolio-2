import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectFirestore } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';

// components
import Navbar from './components/Navbar';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import ProjectPage from './Pages/projects/ProjectPage';
import Projects from './Pages/projects/Projects';
// styles
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    if (isOpen) setIsOpen(false);
  };
  // const transitionEnd = () => {
  //   if (!isOpen) setIsOpen(false);
  // };

  useEffect(() => {
    setIsPending(true);

    const getProjects = async () => {
      try {
        const projectsRef = collection(projectFirestore, 'projects');
        const snapshot = await getDocs(projectsRef);

        if (snapshot.empty) {
          setError('No Project Loading');
          setIsPending(false);
        } else {
          let result = [];
          snapshot.docs.forEach(doc => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setProject(result);
          setIsPending(false);
        }
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    getProjects();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        close={closeNav}
        // end={transitionEnd}
      />
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <Routes>
        <Route
          path="/"
          element={
            <Home projects={project} isPending={isPending} error={error} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={
            <Projects projects={project} isPending={isPending} error={error} />
          }
        />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <footer>
        &copy; <span>Okechukwu Chidera</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;
