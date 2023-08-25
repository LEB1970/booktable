import {Link,useNavigate} from 'react-router-dom';

const Nav = ()=>{
    const navigate = useNavigate();

    function handleClick(e) {
        debugger
        e.currentTarget.classList.remove("show");
    }
    return(
        <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">             
                <div className='logo'><img src="/images/logo3.png" alt="Bootstrap"  width="150"  onClick={()=>{navigate('/')}}/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                <ul  id="navbarNav" className="collapse navbar-collapse"  onClick={handleClick}>
                    <li className="nav-item" >                  
                    <Link to="/" className="nav-link" role="button"  >Home</Link>
                    </li>     
                    <li className="nav-item">
                    <Link to="about" className="nav-link" role="button">About</Link>
                    </li>              
                    <li className="nav-item">
                    <Link to="/menu"  className="nav-link"role="button">Menu</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/booking-page" className="nav-link" role="button">Reservation</Link>
                    </li> 
                    <li className="nav-item">
                    <Link to="/Order-online" className="nav-link" role="button">Order online</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link" role="button">Login</Link>
                    </li>                 
                   
                </ul>
                </div>
            </div>
        </nav>
    )
};
export default Nav;