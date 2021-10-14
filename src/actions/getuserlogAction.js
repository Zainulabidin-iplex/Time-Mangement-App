const axios = require("axios");

export const Getuserlog = (payload) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://34.210.129.167/api/user/${payload.id}/work-logs`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.token,
        },
      }
    );
    return res;
    // return console.log("get userrrrrrrrrrrrrr log", res);

    if (res.data) {
      dispatch({
        type: "GETUSERLOG_ACTION",
        logindata: res.data,
        token: res.data.token,
      });
      return res;
    } else {
      return res;
    }
  };
};
