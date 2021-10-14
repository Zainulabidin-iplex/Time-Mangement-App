const axios = require("axios");

export const CreateWorkLog = (payload) => {
  
  return async (dispatch) => {
    const res = await axios.post(
      `http://34.210.129.167/api/work-logs`,
      {
        logDate: payload.date,
        hours: payload.hour,
        description: payload.des,
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
        type: "CREATEWORKLOG_ACTION",
        getdata: res.data,
        token: res.data.token,
      });
      return res;
    } else {
      return res;
    }
  };
};
