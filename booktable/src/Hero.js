import {useNavigate} from 'react-router-dom';
const Hero = ()=>{
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate("/booking-Page");
    }
    return(
    <div  className="hero">
        <div className="d-flex c1">
            <div  className="hero-s1">
                <h1 className="display-5 fw-bold">Little Lemon</h1>
                <h2 className="display-5 fw-bold">Chicago</h2>
                <div className="hero-about"><p className="col-md-8 fs-5 pb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
                <div className="hero-button"><button className="btn btn-primary btn-lg" type="button" onClick={handleNavigate}>Reserve a Table</button></div>
            </div >
            <img  className="hero-s2"/>
        </div>
    </div>        
    )
};
export default Hero;