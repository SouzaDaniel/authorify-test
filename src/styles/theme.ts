import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: '#652EBE',
    secondary: '#FEFEFE',
    feedback: '#D7D7D7',
    success: '#00C853',
    danger: '#FF1744',
    background: '#222222',
  },
  font: {
    text: 'Nunito, sans-serif',
    title: 'Poppins, sans-serif',
  },
  transition: {
    slow: '1s',
    fast: '0.5s',
  },
  breakpoint: {
    tablet: '768px',
    desktop: '1024px',
  },
};
