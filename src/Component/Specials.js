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
                <img className="card-img-top" src="/images/GreekSalad.png" alt="Greek Salad"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Greek Salad</h5>                    
                    <h5 className="card-title-price">$12.99</h5> 
                </div>              
                <div className="card-body specials-cb">
                <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="delivery"/>
                </div>
                </div>
            </div>
            
            <div className="grid-item">
                <div className="card" >
                <img className="card-img-top" src="/images/Bruchetta.png" alt="Bruchetta"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Bruchetta</h5> 
                    <h5 className="card-title-price">$5.99</h5>                    
                </div>
                <div className="card-body specials-cb">
                <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="delivery"/>
                </div>
                </div>            
            </div>

            <div className="grid-item">
                <div className="card" >
                <img className="card-img-top" src="/images/lemondessert.jpg" alt="lemon dessert"/>
                <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">Lemon Dessert</h5>     
                    <h5 className="card-title-price">$5.00</h5>                
                </div>               
                <div className="card-body specials-cb">
                <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className="card-body  d-flex justify-content-between ">
                <p className="">Order a delivery</p>
                <img className="card-img-delivery" src="/images/delivery.png" alt="delivery"/>
                </div>
                </div>
            </div>

        </div>
        </div>
       
    );
};
export default Specials;