import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={85}
    height={85}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M70.625 5h-56.25C9.205 5 5 9.205 5 14.375v56.25C5 75.795 9.205 80 14.375 80h56.25C75.795 80 80 75.795 80 70.625v-56.25C80 9.205 75.795 5 70.625 5Z'
      fill='#fff'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M68 41.846H56.667v-9.538c0-2.633 2.03-2.385 4.533-2.385h4.533V18h-9.066c-3.607 0-7.067 1.507-9.617 4.19-2.55 2.684-3.983 6.323-3.983 10.118v9.538H34V53.77h9.067V80h13.6V53.77h6.8L68 41.845Z'
      fill='#121212'
    />
  </svg>
);

export default SvgComponent;
