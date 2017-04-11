import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app';
import './style.css';
// require("@blueprintjs/core/dist/blueprint.css");

const root = document.getElementById('root');
ReactDOM.render(
    <App />,
    root
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/app', () => {
        const { App } = require('./components/app');
        ReactDOM.render(<App />, root);
    });
}
