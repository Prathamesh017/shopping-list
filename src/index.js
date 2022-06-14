import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from "./App";

import Store from './Store/store';
import { Provider } from 'react-redux';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={Store}>
    <App></App>
    </Provider>
)