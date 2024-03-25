import React from 'react';
import "./OR.css"; // You can create a CSS file for styling
import Organ from './organ/Organ';

const OR = () => {
  return (
    <main className='or-conatiner' >
    <div className="organ-donation-page">
      <h1>Organ Donation</h1>
      <p>Organ donation is the process of giving an organ or tissue to help someone who needs a transplant. Organ donation can save or improve the lives of many people.</p>
      
      <h2>Why Donate Organs?</h2>
      <ul>
        <li>Save lives: Organ donation can save the lives of people suffering from organ failure.</li>
        <li>Improve quality of life: Transplants can significantly improve the quality of life for recipients.</li>
        <li>Legacy of generosity: Donating organs is a selfless act that leaves a lasting impact on others.</li>
      </ul>
      
      <h2>Types of Organ Donation</h2>
      <p>There are two main types of organ donation:</p>
      <ul>
        <li>Deceased donation: Organs are donated after the donor has passed away.</li>
        <li>Living donation: Organs or tissues are donated by a living person, such as a kidney or part of the liver.</li>
      </ul>
      
      <h2>How to Become an Organ Donor</h2>
      <p>Becoming an organ donor is simple:</p>
      <ol>
        <li>Register: Register as an organ donor with your state's donor registry or national organ donation organization.</li>
        <li>Inform Loved Ones: It's essential to inform your family and close friends about your decision to become an organ donor.
             Your family will be consulted about organ donation in the event of your death, so it's crucial for them to know your wishes.
              Discussing your decision with them ensures that your wishes are respected and followed..</li>
        <li>Carry a Donor Card: While not mandatory, some people choose to carry a donor card indicating their decision to donate organs.
             This card can be kept in your wallet or purse and serves as a reminder of your choice. However, it's important to note that the
              absence of a donor card does not affect your status as an organ donor if you are registered in the donor registry..</li>
      </ol>
      
      <h2>Who Can Donate Organs?</h2>
      <p>Most people can become organ donors regardless of age, race, or medical history. However, certain medical conditions may prevent donation.</p>
      
      <h2>Organ Donation Myths</h2>
      <p>There are several myths surrounding organ donation. Some common myths include:</p>
      <ul>
        <li>Doctors won't try to save my life if they know I'm an organ donor (False).</li>
        <li>My religion doesn't allow organ donation (Many major religions support organ donation).</li>
        <li>Organ donation will disfigure my body (Organ donation is done with great care and respect for the donor's body).</li>
      </ul>
      
      <p>Organ donation is a noble act that can make a profound difference in the lives of others. Consider becoming an organ donor and giving the gift of life.</p>
    </div>
     <Organ/>
    </main>
  );
};

export default OR;
