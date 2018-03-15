import * as React from 'react';
import { inject } from 'njct';
import { TRow } from './table-row';
import { EventManager } from 'react-eventmanager/lib/EventManager';
const { eventManager } = require('react-eventmanager') as { eventManager: EventManager };

type CountryListProps = {
    fetch?: typeof fetch;
};

type CountryListState = {
    items: any[];
};

@eventManager.subscription({
    SET_ITEMS: 'setItems'
})
export class CountryList extends React.Component<CountryListProps, CountryListState> {

    private fetch: typeof fetch = inject('fetch', () => window.fetch.bind(window));

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    setItems(items) {
        this.setState({ items });
    }

    async componentDidMount() {
        const url = 'http://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;subregion;population';
        const result = await this.fetch(url).then(response => response.json());
        // eventManager.emit('SET_ITEMS', result);
        eventManager.emitAsync('SET_ITEMS', result);
        // this.setItems(result);
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
