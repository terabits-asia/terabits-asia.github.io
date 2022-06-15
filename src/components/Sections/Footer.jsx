import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import LogoImg from '../../assets/svg/Logo';
import FacebookIcon from '../../assets/svg/FacebookIcon';

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper
            className='flexSpaceCenter'
            style={{ padding: '30px 0' }}
          >
            <Link
              className='flexCenter animate pointer'
              to='home'
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className='font15 extraBold whiteColor'
                style={{ marginLeft: '15px' }}
              >
                terabits.asia
              </h1>
            </Link>
            <StyleP className='whiteColor font13'>
              © {getCurrentYear()} -{' '}
              <span className='greenColor font13'>terabits.asia</span> All Right
              Reserved
            </StyleP>
            <Link className='pointer' to='home'>
              <FacebookIcon />
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
