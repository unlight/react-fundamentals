import * as React from 'react';
import { Counter2 } from './counter2';

export class Counter2Demo extends React.Component {

    render() {
        return (
            <div>
                <div>Counter 1: <Counter2 />                </div>
                <div>Counter 2: <Counter2 />                </div>
            </div>
        );
    }
}
