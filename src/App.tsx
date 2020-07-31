import React from 'react';
import './App.css';
import WorkExperience from './sections/WorkExperience';
import ProjectsList from './sections/ProjectsList';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import Landing from './sections/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
      <WorkExperience />
      <ProjectsList />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
