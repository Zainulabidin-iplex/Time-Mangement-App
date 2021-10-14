const axios = require("axios");

export const UserRegister = (payload) => {
  // return console.log("data araha hai", payload);
  return async (dispatch) => {
    const res = await axios.post(
      `http://34.210.129.167/api/users`,
      {
        firstName: payload.fname,
        lastName: payload.lname,
        email: payload.email,
        userType: payload.usertype,
        password: payload.pasword,
        password_confirmation: payload.cpasword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.token,
        },
      }
    );

    return res;

    if (res.data) {
      dispatch({
        type: "REGISTRATION_USER",
        registerdata: res.data,
      });
      return res;
    } else {
      return res;
    }
  };
};
