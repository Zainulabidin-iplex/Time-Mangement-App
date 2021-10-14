const axios = require("axios");

export const DltUser = (payload) => {

  return async (dispatch) => {
    const res = await axios.delete(
      `http://34.210.129.167/api/users/${payload.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.token,
        },
      }
    );
     return res;
    // return console.log("Deletettttttttttttttttttt id", res);

    if (res.data) {
      dispatch({
        type: "DELETE_ACTION",
        logindata: res.data,
        token: res.data.token,
      });
      return res;
    } else {
      return res;
    }
  };
};
