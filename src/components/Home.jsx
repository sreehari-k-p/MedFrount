import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';
import organ from "../img/organ.webp";
import blood from "../img/blood.jpg";


const Home = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
 const images = [
    'https://i.ibb.co/cC6T2Zk/image1.jpg', // Replace with the actual URL of your image
    'https://i.ibb.co/MDwTL0S/ch2.jpg', // Replace with the actual URL of your image
    'https://i.ibb.co/99yJSMb/ch3.jpg', // Replace with the actual URL of your image
    'https://i.ibb.co/kMW400N/ch4.webp', // Replace with the actual URL of your image
    'https://i.ibb.co/r34CC92/ch5.jpg', // Replace with the actual URL of your image
    
 ];

 const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
 };

 const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
 };

 return (
    <div className="home">
      <Navbar/>
      <h1>Welcome</h1>
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-button prev">&lt;</button>
        <img src={images[currentSlide]} alt="carousel" className="carousel-image" />
        <button onClick={nextSlide} className="carousel-button next">&gt;</button>
      </div>
      <div className="content">
        <div className="container">
          <h2> MEDONMA LIFE CARE</h2>
          <p>Welcome to our website, a dedicated platform designed to promote organ and blood donation.
             Our mission is to foster a culture of giving and to save lives by connecting donors with those
              in need. We believe that every donation, no matter how small, can make a significant difference
               in the lives of others.</p>
        </div>
        <div className="container">
          <h2> How we help.</h2>
          <p>Our website serves as a comprehensive resource for individuals interested in donating organs or 
            blood. We provide detailed information on the donation process, eligibility criteria, and the impact
             of your donation. We also offer a platform for donors to register, making the donation process more
              accessible and convenient.</p>
        </div>
         
      </div>
      <div className="cards">
        <div className="card">
          <img src={organ} alt="Organ Donation" />
          <h3><a href="/or" target="_blank" rel="noopener noreferrer">Organ Donation</a></h3>
          <p>For more details about organ donation....</p>
        </div>
        <div className="card">
          <img src={ blood} alt="Blood Donation" />
          <h3><a href="/h" target="_blank" rel="noopener noreferrer">Blood Donation</a></h3>
          <p>For more details about blood donation....</p>
        </div>
      </div>
    </div>
 );
};

export default Home;
