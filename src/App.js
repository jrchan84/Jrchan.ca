import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import './common/common.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
