const About = ()=>{
    return(
   
    <div className="about">
        <div className="d-flex m-2">
            <div>
                <div  className="">
                    <h1 className="display-5 fw-bold">Little Lemon</h1>
                    <h2 className="display-5 fw-bold">Chicago</h2>
                    <div className=""><p className="col-md-8 fs-5 pb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
                    
                </div>
            </div>
            <div className="about-img1">
                <img src="/images/fishdish.png" alt="fish dish"/>             
            </div>
            <div className="about-img2">
            <img src="/images/chef2.png" alt="chef"/>
            </div>
        </div>
    </div>
    
    );
};

export default About;