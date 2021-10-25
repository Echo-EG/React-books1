import React, {ChangeEvent, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {addUserAsync, loginUserAsync} from "../redux/RegistrationSlice";
import {useDispatch} from "react-redux";

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

const LoginForm = ({handleClose}: any) => {

    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUserAsync({email:email, username:username, password:password}))
        handleClose();

    }



    return (
        <div>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="filled"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Username"
                    variant="filled"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                        Log-in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;