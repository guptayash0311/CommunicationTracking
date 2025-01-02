import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "./companiesSlice";
import communicationReducer from "./communicationSlice";

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    communications: communicationReducer,
  },
});

export default store;
