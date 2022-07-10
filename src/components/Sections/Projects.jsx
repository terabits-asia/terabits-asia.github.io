import React from 'react';
import styled from 'styled-components';

import ProjectBox from '../Elements/ProjectBox';
import FullButton from '../Buttons/FullButton';

import ProjectImg1 from '../../assets/img/projects/1.png';
import ProjectImg2 from '../../assets/img/projects/2.png';
import ProjectImg3 from '../../assets/img/projects/3.png';

export default function Projects() {
  return (
    <Wrapper id='projects'>
      <div className='lightBg'>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Our Projects</h1>
            <p className='font13'>
              Our teams have experienced with many products. You can check our
              products here.
              <br />
              Start your business with us.
            </p>
          </HeaderInfo>
          <div className='row textCenter'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              {/* <ProjectBox
                img={ProjectImg1}
                title='Awesome Project'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                action={() => alert('clicked')}
              /> */}
              <ProjectBox
                img={ProjectImg1}
                title='BNB App'
                text='You can use digital wallet to purchase items in stores, 
                send money to family and friends and more.'
              />
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <ProjectBox
                img={ProjectImg2}
                title='Loan App'
                text='Apply loan with a convenient way to get quick cash. Can avoid
                filling out a long application or talk to a loan officer.'
              />
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <ProjectBox
                img={ProjectImg3}
                title='Auction App'
                text='Auction app is your best bet for auctioning things on mobile. You
                can put in bids on things on the site through the app.'
              />
            </div>
          </div>
          <div className='row flexCenter'>
            <div style={{ margin: '50px 0', width: '200px' }}>
              {/* <FullButton title='Load More' action={() => alert('clicked')} /> */}
              <FullButton title='See More' />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
