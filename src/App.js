import About from './About/About';
import './App.css';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="app">
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
