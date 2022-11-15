// import React from 'react';
// import ReactDOM from "react-dom/client";
// import App from './components/app/App';
// import reportWebVitals from "./reportWebVitals";

// import './style/style.scss';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './components/app/App';
import './style/style.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);