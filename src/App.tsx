import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme/theme';
import Layout from './modules/Layout/Layout';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
