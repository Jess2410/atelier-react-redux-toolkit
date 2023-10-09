import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../features/wallet/walletSlice";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
  },
});
export default store;
