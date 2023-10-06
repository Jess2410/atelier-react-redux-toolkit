import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { v4 as uuidv4 } from "uuid";

const FormSignIn = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: uuidv4(),
        lastname: e.target.lastname.value,
        firstname: e.target.firstname.value,
        email: e.target.email.value,
        role: e.target.role.value,
        quantityPages: 0,
        dateLogin: Date.now(),
      })
    );
  };

  console.log("🚀 ~ file: Form.jsx:8 ~ Form ~ users:", users);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" className="form-input" />
      </div>
      <div>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name="firstname" className="form-input" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-input" />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-input">
          <option value="">-- Select a role --</option>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>
      </div>
      <button type="submit" className="form-button">
        Subcribe
      </button>
    </form>
  );
};

export default FormSignIn;
