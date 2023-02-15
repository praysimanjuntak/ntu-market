import { Typography, TextField, Button, Link } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Signup = () => {
    return ( 
    <div className="container">
        <div className="inputfields">
            <Stack spacing={2} alignItems="center" mt={10}>
                <Typography variant='h2' component='h2'>Sign Up</Typography>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" variant="outlined" />
                <TextField id="outlined-password-input" label="Retype Password" variant="outlined" />
                <Button variant='contained'>Sign Up</Button>
                <Link href='/' underline='hover'>
                    <Typography variant="subtitle2">Already have an account? Sign-in</Typography>
                </Link>
            </Stack>
        </div>
    </div>
    );
}
 
export default Signup; 