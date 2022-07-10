import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import FacebookIcon from '../../assets/svg/FacebookIcon';
import LinkedIcon from '../../assets/svg/LinkedinIcon';

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper>
            <StyleP className='whiteColor font40 textCenter extraBold'>
              Let’s talk about your project
            </StyleP>
            <StyleP className='whiteColor font13 textCenter'>
              Want to create a digital product while staying focused on your
              main business?
              <br />
              Need to digitize your processes or scale your internal IT
              department?
            </StyleP>
            <SocialWrapper className='flexCenter' style={{ gap: '30px' }}>
              <Link className='pointer' to='home'>
                <FacebookIcon />
              </Link>
              <Link className='pointer' to='home'>
                <LinkedIcon />
              </Link>
            </SocialWrapper>
            <StyleP className='whiteColor font13 textCenter'>
              Email -{' '}
              <span className='greenColor font13'>heythere@terabits.asia</span>
            </StyleP>
            <StyleP className='whiteColor font13 textCenter'>
              © {getCurrentYear()} -{' '}
              <span className='greenColor font13'>terabits.asia</span> All Right
              Reserved
            </StyleP>
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
  padding: 30px 0px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const SocialWrapper = styled.div`
  width: 100%;
  margin: 40px 0px;
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
