import {Link} from 'react-router-dom';
const Footer = ()=>{
    return(
        // <footer >
        //     <section>footer</section>
        //     <div className="d-flex">
        //         <div>1</div>
        //         <div>2</div>
        //         <div>3</div>
        //         <div>4</div>
        //     </div>
        // </footer>


        <footer class="text-center text-lg-start  text-muted">
            <section class="">
                <div class="container text-center text-md-start mt-5">                
                    <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">          
                       <img src='/images/footerImage2.png' alt='footer image'/>                 
                    </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">                        
                        <h6 class="text-uppercase fw-bold mb-4">
                            Doormat Navigation
                        </h6>
                        <p>
                            {/* <a href="#!" class="text-reset">Home</a> */}
                            <Link to="/" className="nav-link" role="button">Home</Link>
                        </p>
                        <p>
                            {/* <a href="#!" class="text-reset">About</a> */}
                            <Link to="/about" className="nav-link" role="button">About</Link>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Menu</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Reservations</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Order Online</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Login</a>
                        </p>
                        </div>
                    
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">        
                        <h6 class="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Address</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">phone number</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">email</a>
                        </p>
                        </div>
                    
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">      
                        <h6 class="text-uppercase fw-bold mb-4">Social Media Links</h6>
                        <p>
                            <a href="#!" class="text-reset">facebook</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">linkedin</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">twitter</a>
                        </p>          
                        </div>        
                    </div>                
                </div>
            </section>
 


  <div class="text-center p-4" style={{background: "rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="#">Little Lemon</a>
  </div>

</footer>
       
    )
};
export default Footer;