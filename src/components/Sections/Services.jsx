import React from 'react';
import styled from 'styled-components';

import ClientSlider from '../Elements/ClientSlider';
import ServiceBox from '../Elements/ServiceBox';
import FullButton from '../Buttons/FullButton';

import AddImage1 from '../../assets/img/add/1.png';
import AddImage2 from '../../assets/img/add/2.png';
import AddImage3 from '../../assets/img/add/3.png';
import AddImage4 from '../../assets/img/add/4.png';

export default function Services() {
  return (
    <Wrapper id='services'>
      <div className='lightBg' style={{ padding: '50px 0' }}>
        <div className='container'>
          <ClientSlider />
        </div>
      </div>
      <div className='lightBg'>
        <div className='container'>
          <Advertising className='flexSpaceCenter'>
            <AddLeft>
              <h4 className='font15 semiBold'>We are Terabits</h4>
              <h2 className='font40 extraBold'>Terabits Biology</h2>
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
                  <FullButton title='See More' />
                </div>
                <div style={{ width: '190px', marginLeft: '15px' }}>
                  {/* <FullButton
                      title='Contact Us'
                      action={() => alert('clicked')}
                      border
                    /> */}
                  <FullButton title='Contact Us' border />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className='flexNullCenter'>
                  <AddImgWrapp1 className='flexCenter'>
                    <img src={AddImage1} alt='office' />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt='office' />
                  </AddImgWrapp2>
                </div>
                <div className='flexNullCenter'>
                  <AddImgWrapp3>
                    <img src={AddImage3} alt='office' />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={AddImage4} alt='office' />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className='lightBg'>
        <div className='container'>
          <Advertising className='flexSpaceCenter'>
            <AddLeft>
              <h4 className='font15 semiBold'>We are Terabits</h4>
              <h2 className='font40 extraBold'>Terabits Biology</h2>
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
                  <FullButton title='See More' />
                </div>
                <div style={{ width: '190px', marginLeft: '15px' }}>
                  {/* <FullButton
                      title='Contact Us'
                      action={() => alert('clicked')}
                      border
                    /> */}
                  <FullButton title='Contact Us' border />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className='flexNullCenter'>
                  <AddImgWrapp1 className='flexCenter'>
                    <img src={AddImage1} alt='office' />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt='office' />
                  </AddImgWrapp2>
                </div>
                <div className='flexNullCenter'>
                  <AddImgWrapp3>
                    <img src={AddImage3} alt='office' />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={AddImage4} alt='office' />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
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
                subtitle='Mobile developers make use of their 
                programming skills in app development. 
                Java, React, ReactNative and all things 
                mobile app relevent.'
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
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
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
const AddLeft = styled.div`
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
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;