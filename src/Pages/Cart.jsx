import React from 'react';
import './Cart.css';
import { Col, Row } from 'react-bootstrap';
import NavbarComponent from '../Components/Navbar';
import { MdOutlineLocalShipping } from 'react-icons/md';

function Cart() {
    return (
        <div>
            <NavbarComponent />
            <div className="Appss ms-5">
                <div className="cart-container">
                    <h1>My Cart</h1>
                    <Row className='mt-3'> 
                        <Col md={8} style={{ backgroundColor: "#f9f8f8" }}>

                            <div><p style={{fontSize:"13px",fontWeight:"600"}}><span style={{ fontSize: "28px" }}><MdOutlineLocalShipping /></span> Free Shipping all over India</p></div>
                            <div className="cart-items">
                                <div className="cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Māruthi Ulto Break light" className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>ID: 5363827</p>
                                        <div className="cart-item-quantity">
                                            <input type="number" defaultValue="1" />
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        <p>₹ 460.00</p>
                                    </div>


                                    <button className='buybutton'>Buy Now</button>

                                </div>
                                <div className="cart-item">
                                    <img src="https://i.postimg.cc/W3z7fRPb/9b43ff92fb9625bc0cf59a822a6d63ca.pnge" alt="Portronics Mobile Holder" className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>Portronics Mobile Holder</h3>
                                        <p>Mobile holder with wireless charging option</p>
                                        <p>ID: 2374237</p>
                                        <div className="cart-item-quantity">
                                            <input type="number" defaultValue="1" />
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        <p>₹ 1700.00</p>
                                    </div>

                                    <button className='buybutton'>Buy Now</button>

                                </div>
                                <div className="cart-item">
                                    <img src="https://i.postimg.cc/B6hPktBd/2b9e2de85bb754de38a14b3886366f52.png" alt="Car Body Cover" className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>Car Body Cover</h3>
                                        <p>nyloned car body cover with waterproof system</p>
                                        <p>ID: 5363827</p>
                                        <div className="cart-item-quantity">
                                            <input type="number" defaultValue="1" />
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        <p>₹ 840.00</p>
                                    </div>


                                    <button className='buybutton'>Buy Now</button>

                                </div>
                                <div className="cart-item">
                                    <img src="https://i.postimg.cc/CKHtVptG/backlight.png" alt="Maruthi Ulto Break light" className="cart-item-img" />
                                    <div className="cart-item-details">
                                        <h3>Maruthi Ulto Break light</h3>
                                        <p>Fiber and Glass Metal Combinations</p>
                                        <p>ID: 5363827</p>
                                        <div className="cart-item-quantity">
                                            <input type="number" defaultValue="1" />
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        <p>₹ 460.00</p>
                                    </div>

                                    <button className='buybutton'>Buy Now</button>

                                </div>
                            </div></Col>

                        <Col md={3}><div className="cart-summary ms-2 p-4" style={{ border: "1px solid #dddddd" }}>
                            <div className="price-details" >

                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <p>Price (4 Items)</p>
                                    <p>₹ 5,367</p>
                                </div>
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <p>Discount</p>
                                    <p>-₹ 1,500</p>
                                </div>
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <p>Coupons for you</p>
                                    <p>-₹ 207</p>
                                </div>
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <p>Delivery Charges</p>
                                    <p>-₹ 200</p>
                                </div>
                                <hr />
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <p>Total Amount</p>
                                    <p>₹ 3,460</p>
                                </div>
                            </div>
                            <button className="checkout-button">Checkout to proceed</button>
                            <button className="google-pay-button">Continue with Google Pay</button>
                            <div className='mt-3'>
                            <p>Advertisement</p>
                            <img style={{width:"100%"}} src="https://i.postimg.cc/DZ9rz8RR/dd27ff13f17623b463c00b07971a794c.jpg" alt="" />
                        </div>
                        </div>
                       
                        </Col>
                        <Col md={1}></Col>
                    </Row>

                </div>

            </div></div>

    );
}

export default Cart;
