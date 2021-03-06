import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ThemeProvider } from "styled-components";
import { theme } from './theme';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

