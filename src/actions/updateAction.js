const axios = require("axios");

export const Updatedata = (payload) => {

    console.log("updated data", payload)

    return async (dispatch) => {

        const res = await axios.put(`http://34.210.129.167/api/users/${payload.id}`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
            // userType: payload.usertypedata
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + payload.token
            },

        })
        return res;
        //   return console.log("upadted user", res)

        if (res.data) {
            dispatch({
                type: 'LOGIN_ACTION',
                logindata: res.data,
                token: res.data.token
            })
            return res;
        } else {
            return res;
        }

    };


}


