import {useNavigate} from 'react-router-dom';

const Specials = ()=>{
    const navigate = useNavigate();
    return(
        <div className="specials">
            <section className=" mb-3">
             <h2>This weeks specials!</h2>
             <div><button className="btn btn-primary btn-lg" type="button" onClick={()=>{navigate("/menu")}}>Online Menu</button></div>                   </section>
            <div  className=" grid-container">
            <div className="grid-item">
                <div className="card">
                <img className="card-img-top" src="/images/GreekSalad.png" alt="Card image cap"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Greek Salad</h5>                    
                    <h5 className="card-title-price">$12.99</h5> 
                </div>              
                <div className="card-body specials-cb">
                <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="Card image cap"/>
                </div>
                </div>
            </div>
            
            <div className="grid-item">
                <div className="card" >
                <img className="card-img-top" src="/images/Bruchetta.png" alt="Card image cap"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Bruchetta</h5> 
                    <h5 className="card-title-price">$5.99</h5>                    
                </div>
                <div className="card-body specials-cb">
                <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="Card image cap"/>
                </div>
                </div>            
            </div>

            <div className="grid-item">
                <div className="card" >
                <img className="card-img-top" src="/images/lemondessert.jpg" alt="Card image cap"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Lemon Dessert</h5>     
                    <h5 className="card-title-price">$5.00</h5>                
                </div>               
                <div className="card-body specials-cb">
                <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="Card image cap"/>
                </div>
                </div>
            </div>

        </div>
        </div>
        // <div className="container specials">
        //     <div className="row justify-content-between">
        //     <h2>This weeks specials!</h2>
        // <div className="card" style={{width: "18rem"}}>
        //     <img className="card-img-top" src="..." alt="Card image cap"/>
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item">Cras justo odio</li>
        //         <li className="list-group-item">Dapibus ac facilisis in</li>
        //         <li className="list-group-item">Vestibulum at eros</li>
        //     </ul>
        //     <div className="card-body">
        //         <a href="#" className="card-link">Card link</a>
        //         <a href="#" className="card-link">Another link</a>
        //     </div>
        // </div>

        // <div className="card" style={{width: "18rem"}}>
        //     <img className="card-img-top" src="..." alt="Card image cap"/>
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item">Cras justo odio</li>
        //         <li className="list-group-item">Dapibus ac facilisis in</li>
        //         <li className="list-group-item">Vestibulum at eros</li>
        //     </ul>
        //     <div className="card-body">
        //         <a href="#" className="card-link">Card link</a>
        //         <a href="#" className="card-link">Another link</a>
        //     </div>
        // </div>

        // <div className="card" style={{width: "18rem"}}>
        //     <img className="card-img-top" src="..." alt="Card image cap"/>
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        //     <ul className="list-group list-group-flush">
        //         <li className="list-group-item">Cras justo odio</li>
        //         <li className="list-group-item">Dapibus ac facilisis in</li>
        //         <li className="list-group-item">Vestibulum at eros</li>
        //     </ul>
        //     <div className="card-body">
        //         <a href="#" className="card-link">Card link</a>
        //         <a href="#" className="card-link">Another link</a>
        //     </div>
        // </div>
       // </div>
       // </div>
    );
};
export default Specials;