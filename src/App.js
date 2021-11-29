
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';





function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      
    
    </div>
  );
}

export default App;
