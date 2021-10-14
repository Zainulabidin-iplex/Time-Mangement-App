import React, { useState } from "react";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../actions/getUserAction";
import { DltUser } from "../../actions/dltAction";
import { Updatedata } from "../../actions/updateAction";
import { CreateWorkLog } from "../../actions/createworklogAction";
import { Getuserlog } from "../../actions/getuserlogAction";
import { showpgination } from "../../actions/paginationAction";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  //
  const [user, setuser] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lname, setLname] = useState("");
  const [pas, setPas] = useState("");
  const [cpas, setCpas] = useState("");
  const [store, setStore] = useState();
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [des, setDes] = useState("");
  const [getuslog, setGetuslog] = useState([]);
  const [filterdata, setfilterdata] = useState([]);

  //
  const loginReducer = useSelector((state) => state.loginReducer.login);
  console.log("login reducer is ", loginReducer.user.id);
  //
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginReducer.token);
  const history = useHistory();
  //
  const userSignup = () => {
    history.push("./usersignup");
  };
  //
  const showUser = async () => {
    const res = await dispatch(GetUser({ token: token }));
    setuser(res.data.users.data);
  };
  //
  const createworkLog = () => {
    dispatch(CreateWorkLog({ date: date, hour: hour, des: des, token: token }));
  };
  //
  const editBtn = (item, id) => {
    console.log("item dats is ", item);
    setStore(item.id);
    setName(item.firstName);
    setLname(item.lastName);
    setEmail(item.email);
    settoggle(true);
  };
  //
  const dltBtn = (id) => {
    dispatch(
      DltUser({
        id: id,
        token: token,
      })
    );
  };
  //
  const Update = () => {
    dispatch(
      Updatedata({
        id: store,
        firstName: name,
        lastName: lname,
        email: email,
        password: pas,
        password_confirmation: cpas,
        token: token,
      })
    );
  };
  //

  const getlog = async () => {
    const res = await dispatch(
      Getuserlog({
        id: loginReducer?.user?.id,
        logDate: date,
        hours: hour,
        description: des,
        token: token,
      })
    );
    setGetuslog(res.data.workLogs.data);
  };
  //
  const editName = (e) => {
    setName(e.target.value);
  };
  //
  const editLname = (e) => {
    setLname(e.target.value);
  };
  //
  const editEmail = (e) => {
    setEmail(e.target.value);
  };
  //
  const editDate = (e) => {
    setDate(e.target.value);
  };
  //
  const editHour = (e) => {
    setHour(e.target.value);
  };
  //
  const editDes = (e) => {
    setDes(e.target.value);
  };
  const handlepageclick = async (data) => {
    console.log(data.selected);
    let currentpage = data.selected + 1;
    const res = await dispatch(
      showpgination({ currentpage: currentpage, token: token })
    );
    setfilterdata(res.data.users.data);
  };

  //////////////

  return (
    <div className="manger_page">
      <div className="header_sec">
        <div className="dashboad_header">
          <div className="manger_countainer">
            <h1 className="dashboard_heading">DASHBOARD WELCOME</h1>
          </div>
        </div>
      </div>
      {loginReducer.user.roles[0].name == "admin" ||
      loginReducer.user.roles[0].name == "manager" ? (
        <div className="create_user">
          <div className="dashboard_btn">
            <button onClick={userSignup} className="create_user_">
              {" "}
              Create User{" "}
            </button>
          </div>
          <div className="dashboard_btn">
            <button onClick={showUser} className="create_user_">
              {" "}
              Get All User{" "}
            </button>
          </div>
        </div>
      ) : null}

      {loginReducer.user.roles[0].name == "user" ? (
        <div className="create_user">
          <div className="dashboard_btn">
            <button onClick={getlog} className="create_user_">
              {" "}
              Get User LOGS{" "}
            </button>
          </div>
        </div>
      ) : null}

      {loginReducer.user.roles[0].name == "admin" ||
      loginReducer.user.roles[0].name == "manager" ? (
        <div className="update_countainer">
          <div className="update_wrapper">
            <div className="update_filed">
              <input
                value={name}
                onChange={editName}
                className="_filed"
                placeholder="First Name"
              />
            </div>
            <div className="update_filed">
              <input
                value={lname}
                onChange={editLname}
                className="_filed"
                placeholder="Last Name"
              />
            </div>
            <div className="update_filed">
              <input
                value={email}
                onChange={editEmail}
                className="_filed"
                placeholder="Email"
              />
            </div>
            <div className="update_filed">
              <buttton className="tr_btn" onClick={Update}>
                Update
              </buttton>
            </div>
          </div>
        </div>
      ) : null}

      {loginReducer.user.roles[0].name == "user" ? (
        <div className="update_countainer">
          <div className="update_wrapper">
            <div className="update_filed">
              <input
                value={date}
                onChange={editDate}
                className="_filed"
                placeholder="Date"
              />
            </div>
            <div className="update_filed">
              <input
                value={hour}
                onChange={editHour}
                className="_filed"
                placeholder="Hours"
              />
            </div>
            <div className="update_filed">
              <input
                value={des}
                onChange={editDes}
                className="_filed"
                placeholder="Description"
              />
            </div>
            <div className="update_filed">
              <buttton className="tr_btn" onClick={createworkLog}>
                Create
              </buttton>
            </div>
          </div>
        </div>
      ) : null}

      <div className="tabel_heading">
        <h1 className="theading">ALL SUMMARY</h1>
      </div>
      {loginReducer.user.roles[0].name == "admin" ||
      loginReducer.user.roles[0].name == "manager" ? (
        <table className="table_countainer">
          <thead>
            <tr className="tabel">
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((item, index) => {
                console.log(item.id);
                return (
                  <tr>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      <button
                        className="tr_btn"
                        onClick={() => editBtn(item, index)}
                      >
                        {" "}
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="tr_btn"
                        onClick={() => dltBtn(item.id)}
                      >
                        {" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : null}
      {loginReducer.user.roles[0].name == "user" ? (
        <table className="table_countainer">
          <thead>
            <tr className="tabel">
              <th>LogDate</th>
              <th>Hours</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {getuslog &&
              getuslog.map((item, index) => {
                console.log(item.id);
                return (
                  <tr>
                    <td>{item.log_date}</td>
                    <td>{item.hours}</td>
                    <td>{item.description}</td>
                    <td>
                      <button className="tr_btn"> Edit</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : null}
      <div>
        <ReactPaginate
          className="pagination"
          className="pre"
          previousLabel={"previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={100}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={handlepageclick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
