import React from 'react';
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IRegistration} from "../forms/interface";

export const getUserAsync = createAsyncThunk<IRegistration[]>(
    'registration/getUserAsync',
    async ():Promise<any> =>{
        const response = await fetch('http://localhost:8080/getUser')
        if (response.ok){
            const registration = await response.json();
            return registration
        }
    }
)

export const loginUserAsync = createAsyncThunk<IRegistration, {email:string, username: string, password:string}>(
    'loginUserAsync',

    async (payload): Promise<any> =>{
        const response = await fetch('http://localhost:8080/customlogin', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            },
            body: JSON.stringify({username: payload.username, password: payload.password})
        })
        if (response.ok){
            return await response.json()
        }
    }
)

export const addUserAsync = createAsyncThunk<IRegistration[],
    {
    username: String,
    password: String,
    email: String,
    name: String
    }
    >('registration/addUserAsync',
    async (payload): Promise<any> =>{
        debugger
        const response = await fetch('http://localhost:8080/addUser', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        if (response.ok){
            return await response.json()
        }
    }
)





const registrationSlice = createSlice({
    name: "registration",
    initialState: [] as IRegistration[],
    reducers:{

    },

    extraReducers:(builder) =>{
        builder.addCase(getUserAsync.fulfilled, (state: IRegistration[], action: PayloadAction<any>) =>{
            return action.payload
        })
        builder.addCase(addUserAsync.fulfilled, (state: IRegistration[], action: PayloadAction<any>) =>{
            return [...state, action.payload]
        })

    }
})

export default registrationSlice.reducer;