import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/user/userSlice";
import { useState } from "react";
import FormSignIn from "./FormSignIn";

const Table = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState("");

  const onOpen = (user) => {
    setOpenModal(!openModal);
    setUserToUpdate(user);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        minWidth: "100vw",
      }}
    >
      <table
        style={{
          minWidth: "1000px",
        }}
      >
        <tbody>
          <tr>
            <td>Id</td>
            <td>Lastname</td>
            <td>Firstname</td>
            <td>Email</td>
            <td>Role</td>
            <td colSpan="2"></td>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.lastname}</td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => onOpen(user)}>✎</button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteUser(user.id))}>✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModal && <FormSignIn userToUpdate={userToUpdate} />}
    </div>
  );
};

export default Table;
