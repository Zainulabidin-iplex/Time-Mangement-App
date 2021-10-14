const axios = require("axios");

export const GetUser = (payload) => {
  return async (dispatch) => {
    const res = await axios.get(`http://34.210.129.167/api/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + payload.token,
      },
    });
    // return console.log("login is ", res);
    return res;
    if (res.data) {
      dispatch({
        type: "GETUSER_ACTION",
        getdata: res.data,
        token: res.data.token,
      });
      return res;
    } else {
      return res;
    }
  };
};
