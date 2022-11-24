import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

import App from './components/app/App';
import './style/style.scss';

 export const store = createStore(reducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);