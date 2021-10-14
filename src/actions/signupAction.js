const axios = require("axios");

export const Registeraction = (payload) => {
  return async (dispatch) => {
    const res = await axios.post(`http://34.210.129.167/api/register`, {
      firstName: payload.fname,
      lastName: payload.lname,
      email: payload.email,
      password: payload.pasword,
      password_confirmation: payload.cpasword,
    });
    return res;

    if (res.data) {
      dispatch({
        type: "REGISTRATION_ACTION",
        registerdata: res.data,
      });
      return res;
    } else {
      return res;
    }
  };
};
