import React, {FC, useState} from 'react';
import {Button} from "@material-ui/core";
import RegisterDialog from "./forms/RegisterDialog";
import LoginDialog from "./forms/LoginDialog";
import "firebase/auth";
import {ProvideAuth} from "./forms/firebaseSetup2";

const App: FC = () => {

    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    // function to handle RegisterModal open
    const handleOpen = () => {
        setOpen(true);
    };

    // function to handle RegisterModal close
    const handleClose = () => {
        setOpen(false);
    };

    // function to handle LoginModal open
    const handleLoginOpen = () =>{
        setOpenLogin(true);
    }

    // function to handle LoginModal close
    const handleLoginClose = () =>{
        setOpenLogin(false);
    }


    return (
        <ProvideAuth>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Signup
            </Button>
            <Button variant="contained" color="secondary" onClick={handleLoginOpen}>
                Log-in
            </Button>
            <RegisterDialog open={open} handleClose={handleClose} />
            <LoginDialog openLogin={openLogin} handleLoginClose={handleLoginClose} />
        </ProvideAuth>
    );
};

export default App;