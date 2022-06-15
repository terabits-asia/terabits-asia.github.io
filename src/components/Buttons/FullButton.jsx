import React from 'react';
import styled from 'styled-components';

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className='animate pointer radius8'
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${props => (props.border ? '#121212' : '#00d563')};
  background-color: ${props => (props.border ? 'transparent' : '#00d563')};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${props => (props.border ? '#121212' : '#ffffff')};
  :hover {
    background-color: ${props => (props.border ? 'transparent' : '#09ba5b')};
    border: 1px solid ${props => (props.border ? '#00d563' : '#09ba5b')};
    color: ${props => (props.border ? '#00d563' : '#ffffff')};
  }
`;
