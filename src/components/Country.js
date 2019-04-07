import React, {Component} from 'react';
import City from './City';
import PropTypes from 'prop-types';

import TurkeyMap from '../map/map.json';
import ElectionResult from '../results/electionResult';

class Country extends Component {
    static propTypes = {
        colors : PropTypes.bool
    };
    render() {
        const cities =TurkeyMap.map(city =>
            <City key={city.id} cityName={city.title} cityCode={city.id} path={city.d} result={ElectionResult[city.id-1]} colors={this.props.colors}></City>
        );
        return (
            <div>
                <svg version="1.1" id="svg-turkiye-haritasi" xmlns={"http://www.w3.org/2000/svg"} xlinkHref="http://www.w3.org/1999/xlink" viewBox={"0 0 1007.478 527.323"} xmlSpace="preserve">
                    <g id={"turkiye"} >
                        { cities }
                    </g>
                </svg>
            </div>
        );
    }
}

export default Country;
