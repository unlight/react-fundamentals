import * as React from 'react';

type CounterState = {
    count: number;
};

export class Counter extends React.Component<{}, CounterState> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <strong>{this.state.count}</strong>
                <button onClick={this.onClick.bind(this)}>Count Up!!</button>
            </div>
        )
    }
}
