import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme/theme';
import Subvention from './pages/Subvention.page';
import './assets/css/normalize.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Subvention />
    </ThemeProvider>
  );
}

export default App;
