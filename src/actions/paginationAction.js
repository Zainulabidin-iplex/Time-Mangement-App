const axios = require("axios");

export const showpgination = (payload) => {
    return async (dispatch) => {
        const res = await axios.get(
            `http://34.210.129.167/api/users?page=${payload.currentpage}`,
            {
                headers: {
                    Authorization: "Bearer " + payload.token,
                    "Content-Type": "application/json",
                },
            }
        );
        return res;

        console.log("response getuser", res.data.users.data);

        if (res) {
            dispatch({
                type: "SHOW_ALLUSERS",
                userall: res.data.users.data,
                // token: res.data.token
            });
            return res;
        } else {
            return res;
        }
    };
};
