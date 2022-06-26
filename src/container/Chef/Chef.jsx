import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>The fourth principle relates to one of the most important tasks of any professional cook.  </p>
          </div>
          <p className='p__opensans'>Maintaining the highest level of sanitation, cleanliness, and safety in the kitchen. Clean as you go must become second nature to every cook. This applies to their personal work area as well as all common areas.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kenin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign'/>
        </div>
      </div>

    </div>
  )
}

export default Chef;