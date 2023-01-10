import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import { Box } from '@mui/system';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  let [view, setView] = React.useState('About');
  return (
    <div>
      <Box>
        <Navbar
          // @ts-ignore
          view={view} setView={setView} />
      </Box>
      {view === 'About' &&
        <Box sx={{ p: 10 }}>
          <About />
        </Box>
      }
      {view === 'Education' &&
        <Box sx={{ p: 10 }}>
          <Education />
        </Box>
      }
      {view === 'Experience' &&
        <Box sx={{ p: 10 }}>
          <Experience />
        </Box>
      }
      {view === 'Projects' &&
        <Box sx={{ p: 10 }}>
          <Projects />
        </Box>
      }
      {view === 'Skills' &&
        <Box sx={{ p: 10 }}>
          <Skills />
        </Box>
      }
    </div>
  );
}

export default App; 
