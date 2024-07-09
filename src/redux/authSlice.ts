import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";

interface InitialStateInterface {
  user: UserState;
}

const storedUser = sessionStorage.getItem("authUser");
const initialState: InitialStateInterface = {
  user: storedUser
    ? JSON.parse(storedUser)
    : {
        username: "",
        password: "",
        avatarImg: "",
        authUser: false,
      },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<Omit<UserState, "authUser">>) {
      state.user = { ...action.payload, authUser: true };
      const saveState = JSON.stringify(state.user);
      sessionStorage.setItem("authUser", saveState);
    },
    logout(state) {
      state.user = {
        username: "",
        password: "",
        avatarImg: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
