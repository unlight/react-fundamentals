import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { withRouter } from 'react-router';
import { Counter } from './counter/counter';
import { Counter2 } from './counter/counter2';

const HomeButton = withRouter(({ history }) => {
    return (
        <button className="pt-button pt-minimal pt-icon-home" onClick={() => history.push('/')}>Home</button>
    );
});

const UserIconButton = withRouter(({ history }) => (
    <button className="pt-button pt-minimal pt-icon-user" onClick={() => history.push('/profile')}></button>
));

declare type AppProps = {
    title?: string;
};

export class App extends React.Component<AppProps, any> {

    render() {
        return (
            <Router>
                <div>
                    <nav className="pt-navbar">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-navbar-heading">{this.props.title}</div>
                            {/*<input className="pt-input" placeholder="Search files..." type="text" />*/}
                        </div>
                        <div className="pt-navbar-group pt-align-right">
                            {/*<Counter/>*/}
                            <HomeButton />
                            <span className="pt-navbar-divider"></span>
                            <UserIconButton />
                            <button className="pt-button pt-minimal pt-icon-notifications pt-disabled"></button>
                            <button className="pt-button pt-minimal pt-icon-cog pt-disabled"></button>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/counter2" component={Counter2} />
                </div>
            </Router>
        );
    }
}
