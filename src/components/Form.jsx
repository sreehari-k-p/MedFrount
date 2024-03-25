import React, { useState } from 'react';
import { Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, FormGroup, FormControlLabel, Typography } from '@mui/material';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [occupation, setOccupation] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [validIdCard, setValidIdCard] = useState('');
  const [idCardNo, setIdCardNo] = useState('');
  const [organsList, setOrgansList] = useState('');
  const [organsChecked, setOrgansChecked] = useState({
    corneas: false,
    kidneys: false,
    heart: false,
    lungs: false,
    liver: false,
    pancreas: false,
    smallIntestine: false,
    skin: false,
  });

  const handleCheckboxChange = (event) => {
    setOrgansChecked({ ...organsChecked, [event.target.name]: event.target.checked });
  };

  const handleFocusChange = (event) => {
    if (event.target.type === 'date') {
      event.target.type = 'text';
    } else {
      event.target.type = 'date';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      fatherName,
      motherName,
      address,
      city,
      district,
      state,
      pinCode,
      mobileNo,
      occupation,
      dob,
      age,
      gender,
      bloodGroup,
      validIdCard,
      idCardNo,
      organsList,
      organsChecked,
    });
    // Add your server-side logic to process the form data
  };

  return (
    <div>
      <h2>Organ Donation Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Father's Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Mother's Name" value={motherName} onChange={(e) => setMotherName(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={8}>
              <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="City" value={city} onChange={(e) => setCity(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="District" value={district} onChange={(e) => setDistrict(e.target.value)} fullWidth required />
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
              <TextField label="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Date of Birth"
                value={dob}
                onFocus={handleFocusChange}
                onChange={(e) => setDob(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField type="number" label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth required>
                <InputLabel>Gender</InputLabel>
                <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
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
            <Grid item xs={8}>
              <TextField
                label="Organs that I wish to donate"
                value={organsList}
                onChange={(e) => setOrgansList(e.target.value)}
                fullWidth
                required
                placeholder="Enter list of organs to donate"
              />
            </Grid>
            <Grid item xs={8}>
            <Typography>Organs that I wish to donate</Typography>
              <FormControl required>
               
                <FormGroup row>
                  {Object.entries(organsChecked).map(([organ, checked]) => (
                    <FormControlLabel
                      key={organ}
                      control={<Checkbox checked={checked} onChange={handleCheckboxChange} name={organ} />}
                      label={organ.replace(/^\w/, (c) => c.toUpperCase())}
                    />
                  ))}
                </FormGroup>
              </FormControl>
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

export default Form;
