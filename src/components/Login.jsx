import React, { useState } from 'react';
import { Grid, TextField, Button, Card, Box } from '@mui/material';
import Navbar from './Navbar';

const LoginForm = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Basic password validation (minimum length)
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Form submitted:', { email, password });
      // Add your server-side logic to process the login data
    }
 };

 return (
    <div>
      <Navbar />
      <Box sx={{ marginBottom: '200px' }}>
        <Card sx={{ boxShadow: 1, p: 4, maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: 'rgba(219, 219, 219, 1)', borderRadius: 4.5 }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Email Input */}
              <Grid item xs={12}>
                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required error={!!emailError} helperText={emailError} />
              </Grid>
              {/* Password Input */}
              <Grid item xs={12}>
                <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required error={!!passwordError} helperText={passwordError} />
              </Grid>
              {/* Submit Button */}
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                 Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
    </div>
 );
};

export default LoginForm;
