
import HomePage from './HomePage';
import Menu from './Menu';
import BookingPage from './BookingPage';
import About from './About';
import OrderOnline from './OrderOnline';
import Login from './Login';

import { Routes, Route} from 'react-router-dom';
import Specials from './Specials';

const Main = ()=>{

const availableTimes = [
        {id:0,time:'17:00'},
        {id:1,time:'18:00'},
        {id:2,time:'19:00'},
        {id:3,time:'20:00'},
        {id:4,time:'21:00'},
        {id:5,time:'22:00'}
    ];

    return(
        <>
            <section></section>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/booking-Page" element={<BookingPage availableTimes={availableTimes}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/order-online" element={<OrderOnline/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/specials" element={<Specials/>}/> */}
            </Routes>
        </>
    )
};
export default Main;