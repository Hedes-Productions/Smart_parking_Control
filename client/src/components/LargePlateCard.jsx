import React from 'react';
import './LargePlateCard.css';

function LargePlateCard() {
  return (
    <div className="cardBody">
      <div className="left">
        {/* <img
          src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
      </div>
      <div className="right">
        <h2 className="title">Booking Form</h2>
        <form action="">
          <div className="formLeft">
            <p>Billing Address</p>
            <div className="inputBox">
              <input type="text" placeholder="Full Name" name="" id="" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Email" name="" id="" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Address" name="" id="" />
            </div>
          </div>
          <hr />

          <div className="formRight">
            <p>Payment</p>
            <div className="inputBox">
              <input type="text" placeholder="Name on Card" name="" id="" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Credit Card" name="" id="" />
            </div>
            <div className="formRightBreak">
              <div className="formRightLeft">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Exp Month/Year"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="formRightRight">
                <div className="inputBox">
                  <input type="text" placeholder="CVV" name="" id="" />
                </div>
              </div>
            </div>
          </div>

          {/* <p className="forget">
            Forgot Password? <a href="/">Click Here</a>
          </p>
          <p className="forget">
            Forgot Password? <a href="/">Click Here</a>
          </p> */}
        </form>
        <button type="submit" form="form1" value="Submit" className="confBtn">
          Confirm Details
        </button>
      </div>
    </div>
  );
}

export default LargePlateCard;
