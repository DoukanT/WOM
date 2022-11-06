import { create } from "@mui/material/styles/createTransitions";
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { 
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signOut,
  signInWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../config/firebase";
//kayıt giriş çıkış için 3 fonksiyon






const initialState = {
    name: "",
    email: "",
    password: "",
  
    isLoading: false,
    error: null,
   
  };


export const register = createAsyncThunk(
  "auth/register" 
  ,async ({name,email,password}, { rejectWithValue }) => {

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, { displayName: name });
    } catch (e) {
      return rejectWithValue(e.code);
    }

    
})

export const logOut = createAsyncThunk("auth/logout", async () => {
    await signOut(auth);
  });


  export const logIn = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        return rejectWithValue(e.code);
      }
    }
  );

 /* export const forgotPassword = createAsyncThunk(
    "auth/forgotPassword",
    async (email, { rejectWithValue }) => {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (e) {
        return rejectWithValue(e.code);
      }
    }
  );*/
  

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeName: (state, action) => {
          state.name = action.payload;
        },
        changeEmail: (state, action) => {
          state.email = action.payload;
        },
        changePassword: (state, action) => {
          state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
        .addCase(logIn.rejected, (state, action) => {
          state.error = action.payload;
        })
      }
});      


export const { changeName, changeEmail, changePassword } = authSlice.actions;
export default authSlice.reducer;