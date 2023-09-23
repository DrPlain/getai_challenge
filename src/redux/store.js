import { configureStore } from "@reduxjs/toolkit";
import getlinkedAPI from "../redux/services/getlinkedAPI";

const store = configureStore({
  reducer: {
    [getlinkedAPI.reducerPath]: getlinkedAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getlinkedAPI.middleware),
});

export default store;
