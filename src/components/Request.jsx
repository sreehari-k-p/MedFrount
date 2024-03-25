import React, { useState } from 'react';
import { Grid, TextField, Button, Checkbox, FormGroup, FormControlLabel, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Request= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    bloodGroup: '',
    address: '',
    hospitalAdmission: '',
    disease: '',
    doctorVerification: '',
    organsRequested: {
      corneas: false,
      kidneys: false,
      heart: false,
      lungs: false,
      liver: false,
      pancreas: false,
      smallIntestine: false,
      skin: false,
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      organsRequested: {
        ...formData.organsRequested,
        [name]: checked
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your server-side logic to process the form data
  };

  return (
    <div>
      <h2>Organ Request Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Gender" name="gender" value={formData.gender} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={8}>
              <TextField label="Address" name="address" value={formData.address} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Hospital Admission" name="hospitalAdmission" value={formData.hospitalAdmission} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Disease" name="disease" value={formData.disease} onChange={handleInputChange} fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth required>
                <InputLabel>Doctor's Verification</InputLabel>
                <Select name="doctorVerification" value={formData.doctorVerification} onChange={handleInputChange}>
                  <MenuItem value="paper1">Doctor's Paper 1</MenuItem>
                  <MenuItem value="paper2">Doctor's Paper 2</MenuItem>
                  <MenuItem value="paper3">Doctor's Paper 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">Organs that I need:</Typography>
              <FormGroup row>
                {Object.entries(formData.organsRequested).map(([organ, requested]) => (
                  <FormControlLabel
                    key={organ}
                    control={<Checkbox checked={requested} onChange={handleCheckboxChange} name={organ} />}
                    label={organ.replace(/^\w/, (c) => c.toUpperCase())}
                  />
                ))}
              </FormGroup>
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

export default Request;
