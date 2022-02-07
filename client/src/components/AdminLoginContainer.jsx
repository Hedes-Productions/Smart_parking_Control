import AdminLoginCSS from './AdminLoginContainer.module.css';
import { React, useState } from 'react';
import { useHistory } from 'react-router';
function CustomContainer() {
  const [adminLoginData, setAdminLoginData] = useState({
    userName: '',
    password: '',
  });
  const history = useHistory();
  const set = (name) => {
    return ({ target: value }) => {
      setAdminLoginData((oldValues) => ({ ...oldValues, [name]: value.value }));
    };
  };

  const accessingDirect = (event) => {
    event.preventDefault();
    console.log('working');
    if (
      adminLoginData.userName === 'admin' &&
      adminLoginData.password === '132'
    ) {
      console.log('Signed');
      history.push('/admin');
    } else {
      console.log('Wrong');
      history.push('/error/404');
    }
  };

  return (
    <div className={AdminLoginCSS.adminGlassContainer}>
      <div class={AdminLoginCSS.adminLoginTitle}>Admin Login</div>
      <form onSubmit={accessingDirect}>
        <div className={AdminLoginCSS.inputBoxAdmin}>
          <input
            type="text"
            name=""
            id=""
            className={AdminLoginCSS.adminInput}
            placeholder="Username"
            value={adminLoginData.userName}
            onChange={set('userName')}
          />
        </div>
        <div className={AdminLoginCSS.inputBoxAdmin}>
          <input
            type="password"
            name=""
            id=""
            classname={AdminLoginCSS.adminInput}
            placeholder="Password"
            value={adminLoginData.password}
            onChange={set('password')}
          />
        </div>
        <button type="submit" className={AdminLoginCSS.confBtnAdminLogin}>
          Confirm Details
        </button>
      </form>
    </div>
  );
}

export default CustomContainer;
