import React, {useEffect} from 'react';
import {Dialog} from "@material-ui/core";

import RegistrationForm from "./RegistrationForm";



const RegisterDialog = ({ open, handleClose }: any) => {

    // const registration:IRegistration[] = useSelector((state: RootState) =>{
    //     return state.registration
    // })
    //
    // const dispatch = useDispatch();
    //
    // useEffect(()=>{
    //     dispatch((getUserAsync()))
    // }, [])


    return (
        <Dialog open={open} onClose={handleClose}>
            <RegistrationForm handleClose={handleClose} />
        </Dialog>
    );
};

export default RegisterDialog;