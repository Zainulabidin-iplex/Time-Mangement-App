import React, { useState } from "react";
import "./UserSignup.css";
import { useDispatch, useSelector } from "react-redux";
import { UserRegister } from "../../actions/userSignupAction";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//
const Usersignup = () => {
  //
  const token = useSelector((state) => state.loginReducer.token);
  //
  const dispatch = useDispatch();
  //
  const history = useHistory();
  //
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [usertype, setUsertype] = useState("");
  const [pasword, setPasword] = useState("");
  const [cpasword, setCpasword] = useState("");
  //
  const userData = async () => {
    const res = await dispatch(
      UserRegister({
        fname: fname,
        lname: lname,
        email: email,
        usertype: usertype,
        pasword: pasword,
        cpasword: cpasword,
        token: token,
      })
    );
    if (res.data) {
      history.push("./login");
    } else {
      console.log("Innocorrect");
    }
  };
  /////////
  return (
    <div className="signup_page">
      <div className="form_countainer">
        <div className="form_detail">
          <h2 className="heading">Sign Up </h2>
          <div className="form_wrapper">
            <div className="form_filed">
              <input
                type="text"
                className="name_filed"
                placeholder=" First name"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></input>
            </div>
            <div className="form_filed">
              <input
                type="text"
                className="name_filed"
                placeholder="Last Name"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form_wrapper">
            <div className="form_filed">
              <input
                type="email"
                className="name_filed"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form_filed">
              <input
                type="email"
                className="name_filed"
                placeholder="User Type"
                required
                value={usertype}
                onChange={(e) => setUsertype(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form_wrapper">
            <div className="form_filed">
              <input
                type="password"
                className="name_filed"
                placeholder="Your Password"
                required
                value={pasword}
                onChange={(e) => setPasword(e.target.value)}
              ></input>
            </div>
            <div className="form_filed">
              <input
                type="password"
                className="name_filed"
                placeholder=" Confrim Password"
                required
                value={cpasword}
                onChange={(e) => setCpasword(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="form_wrapper_last">
            <button className="register" onClick={userData}>
              submit
            </button>
          </div>
          <div className="form_wrapper_last">
            <p className="singuptext">
              Already have an account ? <Link to="/login"> Log in </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usersignup;
