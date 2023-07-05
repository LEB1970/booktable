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

<div  className="hero-s2">
{/* <img src="/images/chef2.png"/> */}
</div>
</div>
</div>



//  <section className="hero">
//   <div className="container">
//     <div className="hero-left"></div>
//     <div className="hero-middle"></div>
//     <div className="hero-right"></div>
//   </div>
// </section> 




        // <div classNameName="hero p-1 mb-4  rounded-3  ">
        //     <div classNameName="container-fluid py-2">
        //         <h1 classNameName="display-5 fw-bold">Little Lemon</h1>
        //         <h2 classNameName="display-5 fw-bold">Chicago</h2>
        //         <div classNameName="d-flex justify-content-between">
        //             <div classNameName="hero-about"><p classNameName="col-md-8 fs-5 pb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
        //             <div><img src="/images/chef2.png"/></div>
        //         </div>
        //         <button classNameName="btn btn-primary btn-lg" type="button">Example button</button>
        //     </div>
        //     {/* <div><img src="/images/chef2.png"/></div> */}
        // </div>
        
    );
};
export default Hero;