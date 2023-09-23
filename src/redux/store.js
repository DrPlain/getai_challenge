import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";
import getlinkedAPI from "../redux/services/getlinkedAPI";

const store = configureStore({
  reducer: {
    [getlinkedAPI.reducerPath]: getlinkedAPI.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getlinkedAPI.middleware),
});

export default store;
