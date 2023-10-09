import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  withdraw,
  empty,
  updateDevise,
  updateName,
} from "../features/wallet/walletSlice";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "$", text: "$" },
  { value: "€", text: "€" },
  { value: "£", text: "£" },
  { value: "¥", text: "¥" },
];
export default function Count() {
  const balance = useSelector((state) => state.wallet.balance);
  const devise = useSelector((state) => state.wallet.devise);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(e.target.inputName.value));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 1200,
        margin: "auto",
      }}
    >
      <p>
        Balance :{" "}
        <span style={{ fontSize: "2rem", color: "#fff" }}>
          {balance} {devise}
        </span>
      </p>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input type="text" name="inputName" style={{ marginRight: 5 }} />
        <button type="submit">Changer nom</button>
      </form>
      <div style={{ display: "flex", margin: 100 }}>
        <select
          style={{ marginRight: 5 }}
          value={devise}
          onChange={(e) => dispatch(updateDevise(e.target.value))}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(deposit(100))}
          style={{ marginRight: 5 }}
        >
          Déposer 100 {devise}
        </button>
        <button
          onClick={() => dispatch(withdraw(100))}
          style={{ marginRight: 5 }}
        >
          Retirer 100 {devise}
        </button>
        <button
          onClick={() => dispatch(empty(balance))}
          style={{ marginRight: 5 }}
        >
          Vider le compte
        </button>
      </div>
    </div>
  );
}
