import Footer from './Footer';
import Specials from './Specials';
import Testimonials from './Testimonial';
import About from './About';
import Hero from './Hero';
const HomePage = ()=>{
    return( 
        <header className="">  
            
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>             
        </header>
    )
};
export default HomePage;