import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCompanies, deleteCompany } from "../api";

export const fetchCompaniesAsync = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    const response = await fetchCompanies();
    return response.data;
  }
);

export const deleteCompanyAsync = createAsyncThunk(
  "companies/deleteCompany",
  async (id) => {
    await deleteCompany(id);
    return id;
  }
);

const companiesSlice = createSlice({
  name: "companies",
  initialState: { companies: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompaniesAsync.fulfilled, (state, action) => {
        state.companies = action.payload;
      })
      .addCase(deleteCompanyAsync.fulfilled, (state, action) => {
        state.companies = state.companies.filter(
          (company) => company.id !== action.payload
        );
      });
  },
});

export default companiesSlice.reducer;
