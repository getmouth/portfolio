import React from 'react';
import resume from '../resume.json';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Contact from './Contact';



const App = () => (
  <div>
    <Profile resume={resume} />
    <Skills resume={resume} />
    <Portfolio resume={resume}/>
    <Contact resume={resume} />
  </div>
);

export default App;
