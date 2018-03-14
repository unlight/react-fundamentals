import * as React from 'react';
import { inject } from 'njct';

type CountryListProps = {
    fetch?: typeof fetch;
};

type CountryListState = {
    items: any[];
};

type TRowProps = {
    country: {
        name: string;
        capital: string;
        alpha3Code: string;
        population: number;
        subregion: string;
    }
};

const TRow: React.StatelessComponent<TRowProps> = (props) => {
    return <tr>
        <td> {/* pt-icon-star pt-disabled */}
            <button className="pt-button pt-icon-star-empty pt-minimal pt-small"></button>
        </td>
        <td>{props.country.name}</td>
        <td>{props.country.capital}</td>
        <td>{props.country.alpha3Code}</td>
        <td>{props.country.population}</td>
        <td>{props.country.subregion}</td>
    </tr>;
};

export class CountryList extends React.Component<CountryListProps, CountryListState> {

    private fetch: typeof fetch = inject('fetch', () => window.fetch.bind(window));

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    async componentDidMount() {
        const url = 'http://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;subregion;population';
        const result = await this.fetch(url).then(response => response.json());
        this.setState({ items: result });
    }

    render() {
        return <table className="pt-table pt-condensed pt-striped pt-bordered">
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
