import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ShoppingCart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) => {

  const total = cart.reduce((acc, product) => acc + (product.price*product.quantity),0)
  return (
    <>
      <NavBar cart={cart}/>

      <div className="cartContainer">
        <div className="cartBody">
          {cart.length === 0 ? (
            <div className="emptyCart">
              <h2 className="emptyText">Your Cart is Empty</h2>
              <Link to={"/product/1"}>
                <h5 className=" ContinueShopping">Continue Shopping</h5>
              </Link>
            </div>
          ) : (
            <>
              <div className="cartItem">
                <div className="cartItemMinTable">
                  <div className="cartItemWrapper">
                    <div className="cartHeader">
                      <h2>Your Cart</h2>
                    </div>

                    <div className="table">
                      <div className="tableHeaderWrapper">
                        <div className="col1">Product</div>
                        <div className="col2">Quantity</div>
                        <div className="col3"></div>
                        <div className="col4">Total</div>
                      </div>
                      {cart.map((item) => (
                        <div className="tableBodyWrapper" key={item.id}>
                          <div className="row">
                            <div className="col1">
                              <div className="pImg">
                                <img
                                  src={item.imgURL}
                                  alt="{item.imgURL}"
                                  height="80px"
                                  width="80px"
                                />
                              </div>
                              <div className="pDetails">
                                <div className="pTitle">
                                  <h4>{item.title}</h4>
                                </div>
                                <div className="pPrice">
                                  Rs. {item.price.toFixed(2)}
                                </div>
                                <div className="pSize">Size: {item.size}</div>
                              </div>
                            </div>
                            <div className="col2">
                              <span onClick={() => decreaseQuantity(item.id)}>
                                -
                              </span>
                              <span>{item.quantity}</span>
                              <span onClick={() => increaseQuantity(item.id)}>
                                +
                              </span>
                            </div>
                            <div className="col3">
                              <RiDeleteBin6Line
                                onClick={() => deleteItem(item.id)}
                              />
                            </div>
                            <div className="col4">
                              Rs. {(item.quantity * item.price).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="nevigate">
                    <Link to={"/product/1"}>
                      <h5 className=" ContinueShopping">Continue Shopping</h5>
                    </Link>
                  </div>
                </div>
                <div className="cartTotalSection"> 
                  <div className="cartInstruction">
                    <h5>Order Special instruction</h5>
                    <textarea
                      name="instructionTextArea"
                      className="instructionTextArea"
                    ></textarea>
                  </div>
                  <div className="cartTotal">
                    <div className="cartTotalAmount">
                      <h3>Estimated total</h3>
                      <div className="cartTotalValue">Rs. {total.toFixed(2)} </div>
                    </div>
                    <div className="cartTaxDescription">
                      <h6>Taxes, discounts and shipping calculated at checkout</h6>
                    </div>
                    <button className="cartCheckOut">Check Out</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ShoppingCart;
