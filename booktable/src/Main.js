
import HomePage from './HomePage';
import Menu from './Menu';
import BookingPage from './BookingPage';
import About from './About';

import { Routes, Route} from 'react-router-dom';
import Specials from './Specials';

const Main = ()=>{
    return(
        <>
            <section></section>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/booking-Page" element={<BookingPage/>}/>
                <Route path="/about" element={<About/>}/>
                {/* <Route path="/specials" element={<Specials/>}/> */}
            </Routes>
        </>
    )
};
export default Main;