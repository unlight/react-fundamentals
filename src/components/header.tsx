import * as React from 'react';

export type HeaderProps = {
    text: string;
};

export class Header extends React.Component<HeaderProps, any> {

    constructor(props: HeaderProps, context?: any) {
        super(props, context);
    }

    render() {
        return (<h1>{this.props.text}</h1>);
    }
}
