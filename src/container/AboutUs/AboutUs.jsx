import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Frédéric Anton, awarded Meilleur Ouvrier de France, has just one wish: to run a luxurious Jules Verne with an expert hand offering an unbeatable gastronomic experience and so fill the heart of the mythical Iron Lady.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>

    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='about_knife'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Frédéric Anton, awarded Meilleur Ouvrier de France, has just one wish: to run a luxurious Jules Verne with an expert hand offering an unbeatable gastronomic experience and so fill the heart of the mythical Iron Lady.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>

  </div>
)

export default AboutUs;
