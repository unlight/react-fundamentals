import * as React from 'react';
import { inject } from 'njct';
import { TRow } from './table-row';

type CountryListProps = {
    fetch?: typeof fetch;
};

export class CountryList extends React.Component<CountryListProps> {

    private fetch: typeof fetch = inject('fetch', () => window.fetch.bind(window));
    readonly state = {
        items: [] as any[],
    };

    setItems(items) {
        this.setState({ items });
    }

    async componentDidMount() {
        const url = 'http://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;subregion;population';
        const result = await this.fetch(url).then(response => response.json());
        this.setItems(result);
    }

    render() {
        return <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped bp3-html-table-bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Code3</th>
                    <th>Population</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {this.state.items.length > 0 && this.state.items.map(item => <TRow key={item.alpha3Code} country={item}></TRow>)}
            </tbody>
        </table >;

    }
}
