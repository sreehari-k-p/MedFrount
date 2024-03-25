import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

const BloodD = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [validIdCard, setValidIdCard] = useState('');
  const [idCardNo, setIdCardNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      address,
      city,
      state,
      pinCode,
      mobileNo,
      bloodGroup,
      validIdCard,
      idCardNo,
    });
    // Add your server-side logic to process the form data
  };

  return (
    <div>
      <h2>Blood Donation Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={8}>
              <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="City" value={city} onChange={(e) => setCity(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="State" value={state} onChange={(e) => setState(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Pin Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Mobile No" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth required>
                <InputLabel>Blood Group</InputLabel>
                <Select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Valid ID Card" value={validIdCard} onChange={(e) => setValidIdCard(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="ID Card No" value={idCardNo} onChange={(e) => setIdCardNo(e.target.value)} fullWidth required />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BloodD;
