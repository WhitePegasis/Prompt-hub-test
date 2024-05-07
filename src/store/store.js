import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/groups/groupSlice";


const rootReducer = {
  groups: groupReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;