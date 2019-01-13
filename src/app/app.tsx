import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { withRouter } from 'react-router';
import { Counter } from './counter/counter';
import { Counter2 } from './counter/counter2';
import { Counter2Demo } from './counter/counter2-demo';
import { RandomUserContainer } from './randomuser/randomuser.container';


const HomeButton = withRouter(({ history }) => {
    return (
        <button type="button" className="bp3-button bp3-minimal bp3-icon-home" onClick={() => history.push('/')}>Home</button>
    );
});

const UserIconButton = withRouter(({ history }) => (
    <button className="bp3-button bp3-minimal bp3-icon-user" onClick={() => history.push('/profile')}></button>
));

declare type AppProps = {
    title?: string;
};

export class App extends React.Component<AppProps, any> {

    render() {
        return (
            <Router>
                <div>
                    <nav className="bp3-navbar">
                        <div className="bp3-navbar-group bp3-align-left">
                            <div className="bp3-navbar-heading">{this.props.title}</div>
                            {/*<input className="bp3-input" placeholder="Search files..." type="text" />*/}
                        </div>
                        <div className="bp3-navbar-group bp3-align-right">
                            {/*<Counter/>*/}
                            <HomeButton />
                            <span className="bp3-navbar-divider"></span>
                            <UserIconButton />
                            <button className="bp3-button bp3-minimal bp3-icon-notifications bp3-disabled"></button>
                            <button className="bp3-button bp3-minimal bp3-icon-cog bp3-disabled"></button>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/counter2" component={Counter2Demo} />
                    <Route path="/randomuser" component={RandomUserContainer} />
                    <Route path="/randomuser2" render={props => <RandomUserContainer x={1} />} />
                </div>
            </Router>
        );
    }
}
