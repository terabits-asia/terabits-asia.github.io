import React from 'react';
import styled from 'styled-components';

import WireframeIcon from '../../assets/svg/Services/WireframeIcon';
import MobileIcon from '../../assets/svg/Services/MobileIcon';
import WebsiteIcon from '../../assets/svg/Services/WebsiteIcon';
import BusinessIcon from '../../assets/svg/Services/BusinessIcon';

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case 'wireframe':
      getIcon = <WireframeIcon />;
      break;
    case 'mobile':
      getIcon = <MobileIcon />;
      break;
    case 'website':
      getIcon = <WebsiteIcon />;
      break;
    case 'business':
      getIcon = <BusinessIcon />;
      break;
    default:
      getIcon = <WireframeIcon />;
      break;
  }

  return (
    <Wrapper className='flex flexColumn'>
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className='font20 extraBold'>{title}</TitleStyle>
      <SubtitleStyle className='font13'>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
