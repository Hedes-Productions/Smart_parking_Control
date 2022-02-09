import React, { useState } from 'react';
import './LargePlateCard.css';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { saveFormData } from '../functions/dataFetch.jsx';

function LargePlateCard() {
  const history = useHistory();
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardName: '',
    cardNo: '',
    expDate: '',
    cvv: '',
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setRegisterData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    swal({
      title: 'Confirm your data',
      text: 'Please confirm your data is true',
      icon: 'info',
      closeOnClickOutside: false,
      button: {
        text: 'Ok',
        closeModal: false,
      },
    })
      .then(async () => {
        const result = await saveFormData(registerData);
        return result;
      })
      .then((result) => {
        if (result.data.message === 'Email sent...') {
          swal(
            'Nice !',
            'You will recieve a email.Please check your email',
            'success'
          );
          setRegisterData({
            fullName: '',
            email: '',
            address: '',
            cardName: '',
            cardNo: '',
            expDate: '',
            cvv: '',
          });
          swal('Nice !', 'Now you can park your vehicle!', 'success');
          swal.stopLoading();
          swal.close();
        } else if (result.data.message === 'User already exists') {
          swal('Oh !', 'User already exists', 'error');
          setRegisterData({
            fullName: '',
            email: '',
            address: '',
            cardName: '',
            cardNo: '',
            expDate: '',
            cvv: '',
          });
        } else {
          swal(
            'Oh !',
            'Check your details are correct. If they are correct, Try again later',
            'error'
          );
          setRegisterData({
            fullName: '',
            email: '',
            address: '',
            cardName: '',
            cardNo: '',
            expDate: '',
            cvv: '',
          });
        }
      })
      .catch((err) => {
        swal('Oh !', 'Something went wrong', 'error');
      });
  };

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
        <form action="" onSubmit={onSubmit}>
          <div className="form">
            <div className="formLeft">
              <p>Billing Address</p>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  name=""
                  id=""
                  value={registerData.fullName}
                  onChange={set('fullName')}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="Email"
                  name=""
                  id=""
                  value={registerData.email}
                  onChange={set('email')}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="Address"
                  name=""
                  id=""
                  value={registerData.address}
                  onChange={set('address')}
                />
              </div>
            </div>
            <hr />
            <div className="formRight">
              <p>Payment</p>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="Name on Card"
                  name=""
                  id=""
                  value={registerData.cardName}
                  onChange={set('cardName')}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  placeholder="Credit Card"
                  name=""
                  id=""
                  value={registerData.cardNo}
                  onChange={set('cardNo')}
                />
              </div>
              <div className="formRightBreak">
                <div className="formRightLeft">
                  <div className="inputBox">
                    <input
                      type="text"
                      required
                      placeholder="Exp Month/Year"
                      name=""
                      id=""
                      value={registerData.expDate}
                      onChange={set('expDate')}
                    />
                  </div>
                </div>
                <div className="formRightRight">
                  <div className="inputBox">
                    <input
                      type="text"
                      required
                      placeholder="CVV"
                      name=""
                      id=""
                      value={registerData.cvv}
                      onChange={set('cvv')}
                    />
                  </div>
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
          <button type="submit" className="confBtn">
            Confirm Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default LargePlateCard;
