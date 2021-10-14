import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Mangerlogin } from "../../actions/loginAction";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  //
  const dispatch = useDispatch();
  //
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  //
  const history = useHistory();
  //
  const loginData = async () => {
    const res = await dispatch(Mangerlogin({ email: email, pasword: pasword }));
    if (res.data) {
      history.push("./Dashboard");
    } else {
      alert("Incorrect");
    }
  };
  //
  const handelpass = (e) => {
    setPasword(e.target.value);
  };
  //
  const handelemail = (e) => {
    setEmail(e.target.value);
  };
  ////////////////////////
  return (
    <div className="signup_page">
      <div className="form_countainer">
        <div className="form_detail">
          <h2 className="heading">Login</h2>
          <div className="form_wrapper">
            <div className="form_filed_center">
              <input
                type="email"
                className="name_filed"
                placeholder="Email"
                value={email}
                onChange={handelemail}
              ></input>
            </div>
          </div>
          <div className="form_wrapper">
            <div className="form_filed_center">
              <input
                type="password"
                className="name_filed"
                placeholder="Password"
                value={pasword}
                onChange={handelpass}
              ></input>
            </div>
          </div>
          <div className="form_wrapper_last">
            <button onClick={loginData} className="register">
              Login
            </button>
          </div>
          <div className="form_wrapper_last">
            <p className="singuptext">
              Not have an account ? <Link to="/"> SignUp </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
