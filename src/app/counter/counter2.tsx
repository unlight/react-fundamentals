import * as React from 'react';
import { Component, State, Method } from './react-decorators';

@Component()
export class Counter2 extends React.Component<{}, { count: number }> {

    @State() count: number = 0;

    constructor(props) {
        super(props);
    }

    @Method()
    onClick(e) {
        this.count = this.count + 1;
    }

    render() {
        return (
            <div>
                <strong>this.count: {this.count} </strong>
                <strong>this.state.count: {this.state.count} </strong>
                <button onClick={this.onClick}>Count Up!</button>
            </div>
        );
    }
}
