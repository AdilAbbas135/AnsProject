import { configureStore } from "@reduxjs/toolkit";
import SessionRedux from "./SessionRedux";
import Alert from "./Alert";
import DashboardData from "./DashboardData";

export default configureStore({
  reducer: {
    session: SessionRedux,
    Alert,
    DashboardData,
  },
});
