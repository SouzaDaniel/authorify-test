import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      feedback: string;
      success: string;
      danger: string;
      background: string;
    };
    font: {
      text: string;
      title: string;
    };
    transition: {
      slow: string;
      fast: string;
    };
    breakpoint: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
