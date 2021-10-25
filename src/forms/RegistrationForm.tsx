import React, {ChangeEvent, FormEventHandler, useEffect, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useAuth} from "./firebaseSetup2";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));




const RegistrationForm = ({ handleClose }: any) => {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();


    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleClose();
    }



    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    );
};

export default RegistrationForm;