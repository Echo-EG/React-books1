export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const NEED_VERIFICATION = "NEED_VERIFICATION";
export const SET_SUCCESS = "SET_SUCCESS";




export interface IRegistration{
    user_id: number,
    username: string,
    password: string,
    name: string,
    email: string
}

// export interface User{
//     user_id: number,
//     username: string,
//     password: string,
//     name: string,
//     email: string
// }
//
// export interface AuthState {
//     user: User | null,
//     authenticated: boolean,
//     loading: boolean,
//     error: boolean,
//     needVerification: boolean,
//     succes: string
// }
//
// export interface SignUpData{
//     username: string,
//     password: string,
//     name: string,
//     email: string
// }
//
// export interface SignInData{
//     email: string,
//     username:string,
//     password:string
// }
//
// interface SetUserAction{
//     type: typeof SET_USER,
//     payload: IRegistration
// }
// interface SetLoadingAction{
//     type: typeof SET_LOADING,
//     payload: boolean
// }
// interface SignOutAction{
//     type: typeof SIGN_OUT
// }
// interface SetErrorAction{
//     type: typeof SET_ERROR,
//     payload: string
// }
// interface NeedVerificationAction{
//     type: typeof NEED_VERIFICATION,
// }
// interface SetSuccesAction{
//     type: typeof SET_SUCCESS,
//     payload: string
// }
//
// export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccesAction;

