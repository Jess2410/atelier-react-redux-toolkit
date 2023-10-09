import { useDispatch, useSelector } from "react-redux";
import {
  connectUser,
  disconnectUser,
  updateRoleUserConnected,
} from "../features/user/userSlice";
import { useEffect, useState } from "react";

const FormLogin = () => {
  const dispatch = useDispatch();
  const { userConnected, users } = useSelector((state) => state.user);
  const [changeRole, setChangeRole] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const connection = (e) => {
    e.preventDefault();
    setEmailInput(e.target.email.value);
    if (users.some((user) => user.email === e.target.email.value)) {
      dispatch(connectUser(e.target.email.value));
      console.log("User connected");
    } else {
      console.log("User unknown.");
    }
  };

  const disconnection = () => {
    dispatch(disconnectUser());
  };

  const handleChange = (e) => {
    console.log("emailInput", e.target.value);
    setEmailInput(emailInput);
  };

  const onPromote = (e) => {
    e.preventDefault();
    if (userConnected.email === emailInput) {
      if (userConnected.role === "admin") {
        console.log("User already admin.");
      }
      if (userConnected.role === "client") {
        dispatch(updateRoleUserConnected("manager"));
      }
      if (userConnected.role === "manager") {
        dispatch(updateRoleUserConnected("admin"));
      }
      console.log(userConnected.role);
    }
  };

  useEffect(() => {
    setEmailInput(emailInput);
  }, [emailInput]);

  return (
    <>
      <form onSubmit={connection}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
        <button onClick={onPromote} className="form-button-promote">
          Promote 🔝
        </button>
        <br />
        <hr />
        <button
          type="reset"
          onClick={disconnection}
          className="form-button-disconnect"
        >
          Disconnect
        </button>
      </form>
    </>
  );
};

export default FormLogin;
