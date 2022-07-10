import React from 'react';
import styled from 'styled-components';

import ClientSlider from '../Elements/ClientSlider';
import ServiceBox from '../Elements/ServiceBox';
import FullButton from '../Buttons/FullButton';

import AddImage1 from '../../assets/img/add/1.png';
import AddImage2 from '../../assets/img/add/2.png';

export default function Services() {
  return (
    <Wrapper id='services'>
      <div className='lightBg' style={{ padding: '50px 0' }}>
        <div className='container'>
          <ClientSlider />
        </div>
      </div>
      <div className='whiteBg'>
        <div className='container'>
          <Advertising className='flexSpaceCenter'>
            <AddLeft1>
              <h2 className='font40 extraBold'>Here Our Industries</h2>
              <p className='font12'>
                We’re currently working on Healthcare , Fintech , E commerce,
                Entertainment projects. Browse through software solutions we
                specialise in and let’s get straight to business.
              </p>
              <ServiceListWrapper className='font12'>
                <li>Teleconsultation App</li>
                <li>Online Pharmacy App</li>
                <li>Hospital managemnt platform</li>
                <li>Banking app development</li>
                <li>Microfinance app development</li>
                <li>Wallet app development</li>
                <li>Bill Aggregator</li>
                <li>Payment Aggregator</li>
                <li>Payment Hub and etc.</li>
              </ServiceListWrapper>
              <ButtonsRow
                className='flexNullCenter'
                style={{ margin: '30px 0' }}
              >
                <div style={{ width: '190px' }}>
                  {/* <FullButton
                      title='Get Started'
                      action={() => alert('clicked')}
                    /> */}
                  <FullButton title='See More' />
                </div>
              </ButtonsRow>
            </AddLeft1>
            <AddRight1>
              <AddRightInner1>
                <div className='flexNullCenter'>
                  <AddImgWrapp className='flexCenter'>
                    <img src={AddImage1} alt='add' />
                  </AddImgWrapp>
                </div>
              </AddRightInner1>
            </AddRight1>
          </Advertising>
        </div>
      </div>
      <div className='lightBg'>
        <div className='container'>
          <Advertising className='flexSpaceCenter'>
            <AddLeft2>
              <AddLeftInner2>
                <AddImgWrapp className='flexCenter'>
                  <img className='radius8' src={AddImage2} alt='add' />
                </AddImgWrapp>
              </AddLeftInner2>
            </AddLeft2>
            <AddRight2>
              <h2 className='font40 extraBold'>Why Terabits</h2>
              <p className='font12'>
                Terabits team is a group of professionals working together to
                achieve a common goal. Through collaboration and an efficient
                process, we develop software products towards a target market.
              </p>
              <ButtonsRow
                className='flexNullCenter'
                style={{ margin: '30px 0' }}
              >
                <div style={{ width: '190px' }}>
                  {/* <FullButton
                    title='Get Started'
                    action={() => alert('clicked')}
                  /> */}
                  <FullButton title='Get Started' />
                </div>
              </ButtonsRow>
            </AddRight2>
          </Advertising>
        </div>
      </div>
      <div className='whiteBg' style={{ padding: '60px 0' }}>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Our Awesome Services</h1>
            <p className='font13'>
              Terabits is a team who creates user friendly digital products with
              brilliant and innovative minds
              <br />
              and promises to achieve your business goals.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className='flex'>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='wireframe'
                title='UI/UX Design'
                subtitle='We ensure that end users have a positive 
                experience using the software. We check 
                the functionalities if it’s user-friendly and 
                easy to navigate. We take user research, 
                competitive analysis, wireframes, user flows, 
                content maps etc. very seriously.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='mobile'
                title='Mobile Development'
                subtitle='We are experts in iOS and Android native 
                development, as well as React Native.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='website'
                title='Web Development'
                subtitle='Web developers make use of their 
                programming skills in Website development. 
                Responsive website, Wordpress, CMS, Java, 
                React, ReactNative and all things web app 
                relevent.'
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon='business'
                title='Business Consultation'
                subtitle='Let us collabrate to achieve your product common 
                goal for determining the needs of the end users. 
                Consult with us for your product design and 
                business goal.'
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const ServiceListWrapper = styled.ul`
  list-style-type: square;
  margin-top: 20px;
  line-height: 35px;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  gap: 35px;
  /* margin: 80px 0; */
  padding: 100px 0;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft1 = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight1 = styled.div`
  width: 50%;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    order: 1;
  }
`;
const AddRightInner1 = styled.div`
  width: 100%;
`;
const AddLeft2 = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddLeftInner2 = styled.div`
  width: 100%;
  left: 0;
  @media (max-width: 1190px) {
    /* top: -250px; */
  }
  @media (max-width: 920px) {
    /* top: -200px; */
  }
  @media (max-width: 860px) {
    order: 1;
    /* top: -60px; */
    left: 0;
  }
`;
const AddRight2 = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddImgWrapp = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    /* border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3); */
  }
`;
