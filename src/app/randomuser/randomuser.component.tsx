import * as React from 'react';

export class RandomUserComponent extends React.Component<any, any> {

    render() {
        const { name } = this.props;
        return <div>
            {name.first} {name.last}
        </div>;
    }
}
