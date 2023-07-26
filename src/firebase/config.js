// version 10
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDn6ZbGmQw4Zhe-dS5uugpkKS9_NdMEAoY',
  authDomain: 'odeco-portfolio.firebaseapp.com',
  projectId: 'odeco-portfolio',
  storageBucket: 'odeco-portfolio.appspot.com',
  messagingSenderId: '884043795347',
  appId: '1:884043795347:web:56e67e2ca6a3b25e68b666',
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);

export { projectFirestore };
