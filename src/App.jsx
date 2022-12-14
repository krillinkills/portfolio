import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Space from './assets/bg.jpg';
import Resume from './components/Resume';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${Space})` }}
      className="w-full h-[100%]"
    >
      {/* <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
      <Resume />
    </div>
  );
}

export default App;
