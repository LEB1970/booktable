import {Link} from 'react-router-dom';
const Nav = ()=>{
    return(
        <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">             
                <div className='logo'><img src="/images/logo.png" alt="Bootstrap"  width="150" /></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                <ul  id="navbarNav" className="collapse navbar-collapse">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" role="button">Home</Link>
                    </li>                   
                    <li className="nav-item">
                    <Link to="/menu"  className="nav-link"role="button">Menu</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/booking-Page" className="nav-link" role="button">Reservation</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="about" className="nav-link" role="button">About</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
};
export default Nav;