import React, { useState } from 'react';
import AdminUserReg from './LargePlateCardAdmin.module.css';
import axios from 'axios';
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
    carNumPlate: '',
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
        console.log(result);
        console.log(result.data.message);
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
            carNumPlate: '',
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
            carNumPlate: '',
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
            carNumPlate: '',
          });
        }
      })
      .catch((err) => {
        swal('Oh !', 'Something went wrong', 'error');
      });
  };

  return (
    <div className={AdminUserReg.cardBodyAdmin}>
      <div className={AdminUserReg.leftAdmin}>
        {/* <img
          src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        /> */}
      </div>
      <div className={AdminUserReg.rightAdmin}>
        <h2 className={AdminUserReg.titleAdmin}>Register Customer</h2>
        <form action="" onSubmit={onSubmit}>
          <div className={AdminUserReg.formAdmin}>
            <div className={AdminUserReg.formLeftAdmin}>
              <p>Billing Address</p>
              <div className={AdminUserReg.inputBoxAdmin}>
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
              <div className={AdminUserReg.inputBoxAdmin}>
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
              <div className={AdminUserReg.inputBoxAdmin}>
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
              <div className={AdminUserReg.inputBoxAdmin}>
                <input
                  type="text"
                  required
                  placeholder="Vehicle registration plate Number"
                  name=""
                  id=""
                  value={registerData.carNumPlate}
                  onChange={set('carNumPlate')}
                />
              </div>
            </div>
            <hr />
            <div className={AdminUserReg.formRightAdmin}>
              <p>Payment</p>
              <div className={AdminUserReg.inputBoxAdmin}>
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
              <div className={AdminUserReg.inputBoxAdmin}>
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
              <div className={AdminUserReg.formRightBreakAdmin}>
                <div className={AdminUserReg.formRightLeftAdmin}>
                  <div className={AdminUserReg.inputBoxAdmin}>
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
                <div className={AdminUserReg.formRightRightAdmin}>
                  <div className={AdminUserReg.inputBoxAdmin}>
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
          <button type="submit" className={AdminUserReg.confBtnAdmin}>
            Confirm Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default LargePlateCard;
