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
      <div className='whiteBg'>
        <div className='container'>
          <HeaderInfo>
            <h1 className='font40 extraBold'>Our Products</h1>
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
                title='Digital Mobile Wallet'
                text='You can use digital wallet to purchase items in stores, 
                send money to family and friends and more.'
              />
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <ProjectBox
                img={ProjectImg2}
                title='Payment Gateway'
                text='Merchants use that platform for receiving customer’s payments 
                with different kinds of payment in one gateway.'
              />
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <ProjectBox
                img={ProjectImg3}
                title='Mobile Banking App'
                text='You can manage your everyday banking needs anytime, anywhere 
                and discover a wide range of features and services on app.'
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
