import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (values, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://67ff3cd258f18d7209f06d39.mockapi.io/CRUD",
        values
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const showAllUsers=createAsyncThunk('readAllUsers',async(values,thunkAPI)=>{
// try {
//     const response=await axios.get("https://67ff3cd258f18d7209f06d39.mockapi.io/CRUD")
//     return response.data
// } catch (error) {
//   return  thunkAPI.rejectWithValue(error.message)
// }
// })

// export const deleteUser=createAsyncThunk("deleteUser",async(id,thunkAPI)=>{
// try {
//  const response= await axios.delete(`https://67ff3cd258f18d7209f06d39.mockapi.io/CRUD/${id}`)
//  return response.data
// } catch (error) {
//   return thunkAPI.rejectWithValue(error.message)
// }
// })

// export const updateUser=createAsyncThunk("updateUser",async(id,thunkAPI)=>{
// try {
//   const response=await axios.patch(`https://67ff3cd258f18d7209f06d39.mockapi.io/CRUD/${id}`)
//   return response.data
// } catch (error) {
//   return thunkAPI.rejectWithValue(error.message)
// }
// })

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
    name: "",
  },
  reducers: {
    setName: (state) => {
      state.name = "parbhat";
    },
  },
  extraReducers(builder) {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
