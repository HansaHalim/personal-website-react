import React from 'react';
import './App.css';
import WorkExperience from './sections/WorkExperience';
import ProjectsList from './sections/ProjectsList';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    <div className="App">
      <WorkExperience />
      <ProjectsList />
      <ContactMe />
    </div>
  );
}

export default App;
