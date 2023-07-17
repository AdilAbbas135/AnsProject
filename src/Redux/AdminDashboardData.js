import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AdminDashboardData = createSlice({
  name: "AdminDashboardData",
  initialState: {
    loading: true,
    Details: null,
    Problems: 0,
    OtherDetails: {},
    isProfileFetched: false,
    error: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // TEACHER PROFILE BUILDERS
    builder.addCase(FetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FetchProfile.fulfilled, (state, action) => {
      const { TotalDonations, TotalUsers, TotalProblemsPosted } =
        action.payload;
      state.Details = action.payload.Profile;
      state.OtherDetails = { TotalDonations, TotalUsers, TotalProblemsPosted };
      state.isProfileFetched = true;
      localStorage.setItem("admin-token", action.payload.authtoken);
      state.loading = false;
    });
    builder.addCase(FetchProfile.rejected, (state, action) => {
      console.log(action);
      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export const FetchProfile = createAsyncThunk("Fetch/FetchProfile", async () => {
  const token = localStorage.getItem("admin-token");
  const result = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/admin/find-profile`,
    {},
    { headers: { token: token } }
  );
  const data = await result?.data;
  return data;
});

export default AdminDashboardData.reducer;
