import {Link} from 'react-router-dom';
const Footer = ()=>{
    return(

        <footer className="text-center text-lg-start  text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">                
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">          
                            <img src='/images/footerImage2.png' alt='footer image'/>                 
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Doormat Navigation
                            </h6>
                            <p>
                                <Link to="/" className="nav-link" role="button">Home</Link>
                            </p>
                            <p>
                                <Link to="/about" className="nav-link" role="button">About</Link>
                            </p>
                            <p>
                            <Link to="/menu" className="nav-link" role="button">Menu</Link>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Reservations</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Order Online</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Login</a>
                            </p>
                        </div>
                    
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Address</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">phone number</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">email</a>
                            </p>
                        </div>
                    
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">      
                            <h6 className="text-uppercase fw-bold mb-4">Social Media Links</h6>
                            <p>
                                <a href="#!" className="text-reset">facebook</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">linkedin</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">twitter</a>
                            </p>          
                        </div>        
                    </div>                
                </div>
            </section>
            <div className="text-center p-4" style={{background:'#FBDABB' }}>            
               <p className='d-flex justify-content-center'> © 2023 Copyright: <Link to="/" className="text-reset fw-bold ps-1" role="button">Little Lemon</Link></p>              
            </div>
        </footer>
       
    )
};
export default Footer;