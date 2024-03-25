import React from 'react';
import "./h.css"
import Blood from  './blood/Blood';

const BloodDonationDetails = () => {
 
 return (
  <main className='or-conatiner' >
    <div className='body'>
      <div className='container'>
        <h1 className='h1'>Blood Donation Details</h1>
        <p className='p'>Blood donation is a simple, safe, and life-saving way to help others. It involves giving blood, plasma, platelets, or red blood cells to a healthcare provider. Donating blood can save lives and improve health outcomes for patients undergoing surgery, those with blood-related diseases, and others.</p>
        <h2 className='h2'>Importance of Blood Donation</h2>
        
        <ul className='ul'>
          <li className='li'>Saving lives: Blood donations can save lives by providing blood to patients who need it.</li>
          <li className='li'>Improving health outcomes: Donating blood can improve health outcomes for patients undergoing surgery, those with blood-related diseases, and others.</li>
          <li className='li'>Feels good: Many people feel good after donating blood, knowing they've helped someone in need.</li>
        </ul>
        <h2 className='h2'>Who Can Donate</h2>
        <p className='p'>Most people can donate blood, but there are some restrictions based on age, health, and lifestyle. It's important to check with a local blood donation center for specific guidelines.</p>
        <h2 className='h2'>Blood Donation Criteria</h2>
        <p className='p'>To ensure the safety of both the donor and the recipient, blood donation centers have specific criteria that potential donors must meet. Some common criteria include:</p>
        <ul className='ul'>
          <li className='li'>Age: Donors typically need to be at least 17 or 18 years old, with upper age limits in some cases.</li>
          <li className='li'>Weight: Donors must meet a minimum weight requirement, usually around 50 kilograms (110 pounds).</li>
          <li className='li'>Health: Donors should be in good health at the time of donation and not have acute illnesses or infections.</li>
          <li className='li'>Hemoglobin Levels: Donors must have adequate hemoglobin levels to ensure they won't become anemic after donating.</li>
          <li className='li'>Medical History: Donors are asked about their medical history and current medications to ensure donation safety.</li>
          <li className='li'>Travel History: Recent travel to certain regions with infectious diseases may defer donation for a period.</li>
          <li className='li'>Behavioral Risk Factors: High-risk behaviors like intravenous drug use or unprotected sex may disqualify someone from donating.</li>
          <li className='li'>Pregnancy and Breastfeeding: Pregnant or breastfeeding individuals are typically deferred from donation.</li>
          <li className='li'>Recent Blood Donation: Donors need to wait a certain period between donations to allow their bodies to replenish blood.</li>
        </ul>
      </div>
    </div>
<Blood/>
   </main>
 );
};

export default BloodDonationDetails;
