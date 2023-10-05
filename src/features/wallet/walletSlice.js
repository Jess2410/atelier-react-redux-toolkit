import { createSlice } from "@reduxjs/toolkit";
const walletSlice = createSlice({
  name: "wallet",
  initialState: { nameUser: "Doe", balance: 0, devise: "$" },
  reducers: {
    // dépot d'argent
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    empty: (state, action) => {
      state.balance -= action.payload;
    },
    updateDevise: (state, action) => {
      state.devise = action.payload;
    },
    updateName: (state, action) => {
      state.nameUser = action.payload;
    },
  },
});

// Export des actions
export const { deposit, withdraw, empty, updateDevise, updateName } =
  walletSlice.actions;
// Export du reducer
export default walletSlice.reducer;
