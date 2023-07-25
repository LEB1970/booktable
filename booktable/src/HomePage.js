import Footer from './Footer';
import Specials from './Specials';
import Testimonials from './Testimonial';
import About from './About';
import Hero from './Hero';
const HomePage = ()=>{
    return( 
        <header className="">  
            
            <Hero/>
            <section>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/> 
            </section>
                      
        </header>
    )
};
export default HomePage;