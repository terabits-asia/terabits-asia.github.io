import React from 'react';
import styled from 'styled-components';

import FullButton from '../Buttons/FullButton';

import HeaderImage from '../../assets/img/header-img.png';

export default function Header() {
  return (
    <Wrapper id='home' className='container flexSpaceCenter'>
      <LeftSide className='flexCenter'>
        <div>
          <h1 className='extraBold font60'>
            Build your business with{' '}
            <span style={{ color: '#00D563' }}>Terabits</span>
          </h1>
          <HeaderP className='font13 semiBold'>
            A highly skilled and efficient development team is your ticket to
            success. It’s the core driver of any software development project.
            If you’re new to the industry, here are things you ought to know as
            you build a software team.
          </HeaderP>
          <BtnWrapper>
            <FullButton title='Let’s work together' />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className='radius8'
            src={HeaderImage}
            alt='office'
            style={{ width: 526, height: 507, zIndex: 9 }}
          />
          <QuoteWrapper className='flexCenter darkBg radius8'>
            <div>
              <p className='font13 whiteColor'>
                Startup is like people are sitting in a boat and rowing. All
                must row and it will go forward quickly.
              </p>
              <p
                className='font15 greenColor textRight'
                style={{ marginTop: '10px' }}
              >
                Leader of our Terabits
              </p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
