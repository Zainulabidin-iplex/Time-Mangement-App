import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Registeraction } from "../../actions/signupAction";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  //
  const dispatch = useDispatch();
  //
  const history = useHistory();
  //
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const [cpasword, setCpasword] = useState("");
  //
  const formData = async (e) => {
    const res = await dispatch(
      Registeraction({
        fname: fname,
        lname: lname,
        email: email,
        pasword: pasword,
        cpasword: cpasword,
      })
    );
    if (res.data) {
      history.push("./login");
    } else {
      console.log("Innocorrect");
    }
  };
  //
  const hadelPasword = (e) => {
    setPasword(e.target.value);
  };
  //
  const hadelCpasword = (e) => {
    setCpasword(e.target.value);
  };
  ///////////////
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
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></input>
            </div>
            <div className="form_filed">
              <input
                type="text"
                className="name_filed"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form_wrapper">
            <div className="form_filed_center">
              <input
                type="email"
                className="name_filed"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form_wrapper">
            <div className="form_filed">
              <input
                type="password"
                className="name_filed"
                placeholder="Your Password"
                value={pasword}
                onChange={hadelPasword}
              ></input>
            </div>
            <div className="form_filed">
              <input
                type="password"
                className="name_filed"
                placeholder=" Confrim Password"
                value={cpasword}
                onChange={hadelCpasword}
              ></input>
            </div>
          </div>
          <div className="form_wrapper_last">
            <button className="register" onClick={formData}>
              {" "}
              Submit{" "}
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

export default SignUp;
