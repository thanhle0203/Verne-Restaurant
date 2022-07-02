import React from 'react';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>123 Broadway Street, San Jose, CA 94510, USA</p>
          <p className='p__opensans'>+1 408 764 4444</p>
          <p className='p__opensans'>+1 408 777 4444</p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt='footer_logo' />
          <p className='p__opensans'>Always satisfy the taste of cutomers with best quatity of food and services</p>
          <img src={images.spoon} alt='spoon' className='spoon_img' style={{margin: 15}}/>
        </div>
        <div className='app__footer-links_work'>

        </div>
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2021 Gericht. All Rights Reserved.</p>
      </div>
    </div>
);

export default Footer
