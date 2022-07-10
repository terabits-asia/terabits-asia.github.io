import React from 'react';
import styled from 'styled-components';

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper className='darkBg radius8 flexNullCenter flexColumn'>
      <p className='greenColor font15' style={{ alignSelf: 'center' }}>
        {author}
      </p>
      <p className='whiteColor font13' style={{ paddingTop: '20px' }}>
        {text}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 20px 30px;
  margin-top: 30px;
`;
