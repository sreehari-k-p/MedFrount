import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel, Card, Box, dividerClasses } from '@mui/material';
import img from "../img/bg1.png"
const Form = () => {
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
    <Box sx={{ marginTop: '250px' }}>
      <Card sx={{ boxShadow: 1, p: 4, maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: 'rgba(219, 219, 219, 1)', borderRadius: 4.5 }}>
        <img 
        style={{width:'100%',height:'100%',objectFit:'fill'}}
        src={img}
        alt="formbg"/>
        <h2>Blood Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Name Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth required />
            </Grid>
            {/* Address Input */}
            <Grid item xs={12}>
              <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth required />
            </Grid>
            {/* City Input */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select value={city} onChange={(e) => setCity(e.target.value)} required>
                  <MenuItem value="Aluva">Aluva</MenuItem>
                  <MenuItem value="Angamaly">Angamaly</MenuItem>
                  <MenuItem value="Edapally">Edapally</MenuItem>
                  <MenuItem value="Kochi">Kochi</MenuItem>
                  <MenuItem value="Muvattupuzha">Muvattupuzha</MenuItem>
                  <MenuItem value="Perumbavoor">Perumbavoor</MenuItem>
                  <MenuItem value="Piravom">Piravom</MenuItem>
                  <MenuItem value="Thripunithura">Thripunithura</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* State Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="State" value={state} onChange={(e) => setState(e.target.value)} fullWidth required />
            </Grid>
            {/* Pin Code Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="Pin Code" value={pinCode} onChange={(e) => setPinCode(e.target.value)} fullWidth required />
            </Grid>
            {/* Mobile No Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="Mobile No" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} fullWidth required />
            </Grid>
            {/* Blood Group Input */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Blood Group</InputLabel>
                <Select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
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
            {/* Valid ID Card Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="Valid ID Card" value={validIdCard} onChange={(e) => setValidIdCard(e.target.value)} fullWidth required />
            </Grid>
            {/* ID Card No Input */}
            <Grid item xs={12} sm={6}>
              <TextField label="ID Card No" value={idCardNo} onChange={(e) => setIdCardNo(e.target.value)} fullWidth required />
            </Grid>
            {/* Submit Button */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
    </div>

  );
};

export default Form;
