import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="App"
    
    style={{background: darkmode? 'black' : '',  color: darkmode? 'white' : '' }}
    
    
    
    >
    <Navbar/>  
    <Intro/>  
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  
  );
  
}

export default App;
