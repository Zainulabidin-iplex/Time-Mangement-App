const axios = require("axios");

export const Mangerlogin = (payload) => {
  // console.log("zain you great", payload);
  return async (dispatch) => {
    const res = await axios.post(`http://34.210.129.167/api/login`, {
      email: payload.email,
      password: payload.pasword,
    });

    // console.log("login is ", res.data.token);

    if (res.data) {
      dispatch({
        type: "LOGIN_ACTION",
        logindata: res.data,
        token: res.data.token,
      });
      return res;
    } else {
      return res;
    }
  };
};

