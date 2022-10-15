import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './componets/App';
import {ThemProvider} from "styled-components";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemProvider theme={theme}>
      <App />
    </ThemProvider>
    </BrowserRouter>
  </React.StrictMode>
);


