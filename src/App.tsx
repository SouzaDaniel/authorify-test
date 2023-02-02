import { ThemeProvider } from 'styled-components';

import { FormProvider } from './store/providers/Form';

import { Page } from './pages/Home';

import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <FormProvider>
      <GlobalStyles />
      <Page />
    </FormProvider>
  </ThemeProvider>
);
