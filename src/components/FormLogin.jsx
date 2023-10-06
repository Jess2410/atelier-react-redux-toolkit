import { useDispatch } from "react-redux";
import { connectUser, disconnectUser } from "../features/user/userSlice";

const FormLogin = () => {
  const dispatch = useDispatch();

  const connection = (e) => {
    e.preventDefault();
    dispatch(connectUser(e.target.email.value));
  };

  // console.log(user);
  const disconnection = () => {
    dispatch(disconnectUser());
  };

  return (
    <>
      <form onSubmit={connection}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-input" />
        </div>
        <button type="submit" className="form-button">
          Check
        </button>
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
