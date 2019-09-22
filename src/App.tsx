import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
