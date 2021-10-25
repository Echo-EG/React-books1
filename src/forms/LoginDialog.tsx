import React from 'react';
import RegistrationForm from "./RegistrationForm";
import {Dialog} from "@material-ui/core";
import LoginForm from "./LoginForm";

const LoginDialog = ({openLogin, handleLoginClose}: any) => {
    return (
        <div>
            <Dialog open={openLogin} onClose={handleLoginClose}>
                <LoginForm handleClose={handleLoginClose} />
            </Dialog>
        </div>
    );
};

export default LoginDialog;