import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import TestimonialBox from '../Elements/TestimonialBox';

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className='flexCenter'>
          <TestimonialBox
            text='Let us know what u want, one of our
            representatives will contact you in 1 business
            day, for further communication.'
            author='Send us your requirement'
          />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <TestimonialBox
            text='We would like to assure you the privacy of
            your idea and project.'
            author='Sign NDA'
          />
        </LogoWrapper>
        <LogoWrapper className='flexCenter'>
          <TestimonialBox
            text='Get your estimation & we will make the magic
            happen !'
            author='Analayzing your requirements'
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
