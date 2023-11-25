import {createSlice} from "@reduxjs/toolkit"

const initialLoginState={
    showLogin: true,
    token: "",
    email: "",
};

const loginSlice=createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login(state,action){
            //console.log(action.payload);
            state.token=action.payload.token;
            state.email=action.payload.email;
        },
        logout(state,action){

        }
    }
})
export const loginAction =loginSlice.actions;
export default loginSlice.reducer;