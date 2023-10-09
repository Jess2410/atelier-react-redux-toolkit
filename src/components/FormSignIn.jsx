import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../features/user/userSlice";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line react/prop-types
const FormSignIn = ({ userToUpdate }) => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToUpdate) {
      dispatch(
        updateUser({
          id: userToUpdate.id,
          lastname: e.target.lastname.value,
          firstname: e.target.firstname.value,
          email: e.target.email.value,
          role: e.target.role.value,
        })
      );
    } else {
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
    }
  };

  console.log("🚀 ~ file: Form.jsx:8 ~ Form ~ users:", users);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          name="lastname"
          className="form-input"
          defaultValue={userToUpdate ? userToUpdate.lastname : ""}
        />
      </div>
      <div>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          className="form-input"
          defaultValue={userToUpdate ? userToUpdate.firstname : ""}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-input"
          defaultValue={userToUpdate ? userToUpdate.email : ""}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-input"
          defaultValue={userToUpdate ? userToUpdate.role : ""}
        >
          <option value="">-- Select a role --</option>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>
      </div>
      <button type="submit" className="form-button">
        {userToUpdate ? "Change" : "Submit"}
      </button>
    </form>
  );
};

export default FormSignIn;
