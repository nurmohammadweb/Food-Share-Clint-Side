import React from 'react';
import logoImg from '../assets/logo-removebg-preview.png'
import logoFa from '../assets/facebook-removebg-preview.png'
import logoIt from '../assets/images__2_-removebg-preview.png'
import logoin from '../assets/in-removebg-preview.png'


const Footer = () => {
  return (
    <footer className="bg-green-400 text-primary-content py-10 px-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
         <img className='w-50' src={logoImg} alt="" />
          <p className="font-bold text-lg text-center">PlateShare</p>
          <p className="text-sm opacity-80">
            Sharing food, spreading kindness.<br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex justify-center">
         <nav>
            <div className="flex justify-center items-center">
                  <a href='https://www.facebook.com/nur.mohammad.740488'  target="_blank" >
        <img className='w-18 mr-5' src={logoFa} alt="" /> 
      </a>
      
      <a href='https://www.linkedin.com/in/nur-mohammad-9aa6622a6/'  target="_blank" >
       <img className='w-18 ' src={logoin} alt="logoin" /> </a>.
      <a href='https://www.instagram.com/nur_mohammad690/'  target="_blank" >
       <img className='w-30 mr-4' src={logoIt} alt="" /> 
      </a>
 
      
    </div>
  </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
