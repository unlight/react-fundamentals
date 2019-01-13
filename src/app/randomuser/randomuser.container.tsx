import * as React from 'react';
import { RandomUserComponent } from './randomuser.component';

type RandomUserContainerProps = {
    fetch: typeof fetch;
}

export class RandomUserContainer extends React.Component<RandomUserContainerProps, any> {

    readonly defaultProps: RandomUserContainerProps = {
        fetch: window.fetch
    };

    readonly state = {
        user: null as any,
    };

    async componentDidMount() {
        const { results: [user] } = await this.props.fetch('https://randomuser.me/api/').then(response => response.json());
        this.setState({ user });
    }

    render() {
        if (!this.state.user) {
            return <div>Loading...</div>;
        }
        // React.createElement(RandomUserComponent, this.state.user, )
        return <RandomUserComponent {...this.state.user} />;
    }
}
