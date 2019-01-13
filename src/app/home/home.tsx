import * as React from 'react';
import { CountryList } from './country-list/country-list';

const defaultProps = {
    CountryList: CountryList,
};

export class Home extends React.Component<typeof defaultProps, any> {

    static defaultProps = defaultProps;

    render() {
        return <this.props.CountryList />;
    }
}
