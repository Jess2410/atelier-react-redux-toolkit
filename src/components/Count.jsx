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
  const name = useSelector((state) => state.wallet.nameUser);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(e.target.inputName.value));
  };
  console.log("name : ", name);

  return (
    <div>
      <div>
        Solde (balance): {balance} {devise}
      </div>
      <button onClick={() => dispatch(deposit(100))}>
        Déposer 100{devise}
      </button>
      <button onClick={() => dispatch(withdraw(100))}>
        Retirer 100{devise}
      </button>
      <button onClick={() => dispatch(empty(balance))}>Vider le compte</button>
      <select
        value={devise}
        onChange={(e) => dispatch(updateDevise(e.target.value))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <form onSubmit={onSubmit}>
        <input type="text" name="inputName" />
        <button type="submit">Changer nom</button>
      </form>
    </div>
  );
}
