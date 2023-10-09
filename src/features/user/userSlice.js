import { createSlice, current } from "@reduxjs/toolkit";
const INITIAL_USER_CONNECTED = {
  id: undefined,
  lastname: "",
  firstname: "",
  email: "",
  role: "",
  quantityPages: 0,
  dateLogin: undefined,
};

const DATA_USERS = [
  {
    id: 1,
    lastname: "Doe",
    firstname: "John",
    email: "doe@mail.com",
    role: "admin",
    quantityPages: 10,
    dateLogin: Date.now(),
  },
  {
    id: 2,
    lastname: "Piles",
    firstname: "Paul",
    email: "paul@mail.com",
    role: "manager",
    quantityPages: 3,
    dateLogin: Date.now(),
  },
  {
    id: 3,
    lastname: "Dolly",
    firstname: "Eliott",
    email: "eliott@mail.com",
    role: "manager",
    quantityPages: 3,
    dateLogin: Date.now(),
  },
  {
    id: 4,
    lastname: "Tills",
    firstname: "Paula",
    email: "paulae@mail.com",
    role: "manager",
    quantityPages: 3,
    dateLogin: Date.now(),
  },
];

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: DATA_USERS,
    userConnected: INITIAL_USER_CONNECTED,
  },
  reducers: {
    //methods
    addUser: (state, action) => {
      state.users.push(action.payload);
      return state;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      return state;
    },

    //     - connecter l'utilisateur, en lui donnant un nom, un prénom, une adresse email et un role (et en enregistrant sa date de connexion)
    connectUser: (state, action) => {
      const userEmail = current(state.users).find(
        (user) => user.email === action.payload
      );

      if (userEmail) {
        state.userConnected = userEmail;
      }
    },
    // - déconnecter l'utilisateur en supprimant ses informations
    disconnectUser: (state) => {
      state.userConnected = INITIAL_USER_CONNECTED;
    },
    // - lors de chaque changement de page (ajoutez React Router DOM au projet), augmenter le nombre de page visitées de 1

    updateViewedPages: (state) => {
      if (state.userConnected.id) {
        const quantityPages = state.userConnected.quantityPages + 1;
        state.userConnected.quantityPages = quantityPages;
      }
    },
    // - modifier les informations de l'utilisateur connecté
    updateUser: (state, action) => {
      const { id, lastname, firstname, email, role } = action.payload;
      const userToUpdate = state.users.find((user) => user.id === id);

      if (userToUpdate) {
        userToUpdate.lastname = lastname;
        userToUpdate.firstname = firstname;
        userToUpdate.email = email;
        userToUpdate.role = role;
      }
    },

    // - promouvoir l'utilisateur (en admin ou en gestionnaire)
    updateRoleUserConnected: (state, action) => {
      const newRole = action.payload;
      const userConnected = state.userConnected;

      if (userConnected) {
        userConnected.role = newRole;
      }
    },
  },
});

export const {
  addUser,
  deleteUser,
  connectUser,
  disconnectUser,
  updateViewedPages,
  updateUser,
  updateRoleUserConnected,
} = userSlice.actions;
export default userSlice.reducer;
