import * as React from 'react';
import { RandomUserComponent } from './randomuser.component';

export class RandomUserContainer extends React.Component<any, any> {

    readonly state = {
        user: null,
    }

    async componentDidMount() {
        const { results: [user] } = await fetch('https://randomuser.me/api/').then(response => response.json());
        this.setState({ user });
    }

    render() {
        if (!this.state.user) {
            return <div>Loading...</div>;
        }
        return <RandomUserComponent {...this.state.user} />;
    }
}
