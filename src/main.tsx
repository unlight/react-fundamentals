import * as React from 'react';
import * as ReactDOM from 'react-dom';

render();

function render() {
    const { App } = require('./app/app');
    const appElement = <App title="React App" />;
    ReactDOM.render(appElement, document.getElementById('app'));
}

// Hot Module Replacement API.
if (module.hot) {
    module.hot.accept('./app/app', render);
}
