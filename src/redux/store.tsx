import {configureStore} from "@reduxjs/toolkit";
import registrationReducer from  "./RegistrationSlice";
import {IRegistration} from "../forms/interface";

export interface RootState{
    registration: IRegistration[]
}



export default configureStore({
    reducer:{
        registration: registrationReducer
    }
})