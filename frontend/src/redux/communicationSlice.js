import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommunicationMethods, logCommunication } from "../api";

export const fetchCommunicationMethodsAsync = createAsyncThunk(
  "communications/fetchMethods",
  async () => {
    const response = await fetchCommunicationMethods();
    console.log("Fetched methods response:", response.data);
    return response.data;
  }
);

export const logCommunicationAsync = createAsyncThunk(
  "communications/logCommunication",
  async (data) => {
    console.log(data);
    await logCommunication(data);
  }
);

const communicationSlice = createSlice({
  name: "communications",
  initialState: { methods: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommunicationMethodsAsync.fulfilled, (state, action) => {
      state.methods = action.payload;
    });
  },
});

export default communicationSlice.reducer;