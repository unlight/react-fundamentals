import * as React from 'react';

export class Counter2 extends React.Component<{}, { count: number }> {

    render() {
        return (
            <div>
                <strong>this.count: </strong>
            </div>
        );
    }
}
