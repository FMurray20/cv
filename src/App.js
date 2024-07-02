import './App.css';
import * as React from 'react';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import { Box } from '@mui/system';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Projects from './Pages/Projects.tsx';
import Skills from './Pages/Skills';
import BackgroundAnimation from './Components/BackgroundAnimation.tsx';
import Footer from './Components/Footer.js';

function App() {
  const [view, setView] = React.useState(localStorage.getItem('view') || 'About'); // Default to 'About' or whatever is in localStorage

  const handleNavItemClick = (item) => {
    setView(item); // Update the view state
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
    localStorage.setItem('view', item); // Persist the new view in localStorage
  };

  return (
    <>
      <BackgroundAnimation />
      {
        <>
          <Box>
            <Navbar
              // @ts-ignore
              view={view} setView={setView} onNavItemClick={handleNavItemClick} />
          </Box>
          <div className='content'
            style={{
              paddingLeft: window.innerWidth < 650 ? '20px' : '80px',
              paddingRight: window.innerWidth < 650 ? '20px' : '80px',
              paddingTop: '10px',
              paddingBottom: '10px'
            }} >
            {view === 'About' &&
              <Box sx={{ pt: 10 }}>
                <About />
              </Box>
            }
            {view === 'Education' &&
              <Box sx={{ pt: 8 }}>
                <Education />
              </Box>
            }
            {view === 'Experience' &&
              <Box sx={{ pt: 8 }}>
                <Experience />
              </Box>
            }
            {view === 'Projects' &&
              <Box sx={{ pt: 8 }}>
                <Projects />
              </Box>
            }
            {view === 'Skills' &&
              <Box sx={{ pt: 8 }}>
                <Skills />
              </Box>
            }
            <Footer />
          </div>
        </>
      }
    </>
  );
}

export default App; 
