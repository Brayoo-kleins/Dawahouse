import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className='row bg-info text-light p-4'>
        
        <div className='col-md-4'>
          <h2>Who We Are</h2>
          <p>
            We are a trusted online pharmacy platform dedicated to connecting
            people with genuine medicines, health products, and reliable pharmacies.
          </p>
        </div>

        <div className='col-md-4'>
          <h2>Our Mission</h2>
          <p>
            To provide a safe, fast, and easy-to-use platform for accessing
            medicines and healthcare products — ensuring quality, affordability,
            and convenience for everyone.
          </p>
        </div>

        <div className='col-md-4'>
          <h2>Our Vision</h2>
          <p>
            To be the most reliable and preferred pharmacy marketplace in Kenya,
            fostering trust, transparency, and better health outcomes in every
            community.
          </p>
        </div>

      </section>

      <footer className="text-light bg-dark p-3 text-center">
        <h5>
          Developed by Ryan Giggs &copy; 2026. All rights reserved.
        </h5>
      </footer>
    </div>
  );
};

export default Footer;