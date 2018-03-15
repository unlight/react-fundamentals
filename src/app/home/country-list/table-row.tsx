import * as React from 'react';

type TRowProps = {
    country: {
        name: string;
        capital: string;
        alpha3Code: string;
        population: number;
        subregion: string;
    }
};

export const TRow: React.StatelessComponent<TRowProps> = (props) => {
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
