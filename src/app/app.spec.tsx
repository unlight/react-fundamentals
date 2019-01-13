import * as React from 'react';
import { App } from './app';
import * as renderer from 'react-test-renderer';
const ReactShallowRenderer = require('react-test-renderer/shallow');

test('smoke', () => {
    const component = <App />;
    expect(component).toBeTruthy();
});

test('renderer', () => {
    const component = renderer.create(<App title="foo" />);
    expect(component).toBeTruthy();
    // const { props } = component.toJSON();
});

test('renderer', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<App title="foo" />);
    const result = renderer.getRenderOutput();
});
