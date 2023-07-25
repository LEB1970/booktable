
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
// import Main from './Main';
import  * as main from './Main'
import Footer from './Footer';
import Specials from './Specials';
import Testimonials from './Testimonial';
import About from './About';

function App() {
  return (
    <>    
    <Nav/>
    {/* <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
    <Footer/> */}
    <main.Main/> 
    </>
  );
}

export default App;
