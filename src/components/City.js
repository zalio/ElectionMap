import React, {Component} from 'react';
import PropTypes from 'prop-types';

const parties = [
    ["akparti" , 8],
    ["chp" , 7],
    ["mhp" , 10],
    ["dsp" , 13],
    ["hdp" , 12],
    ["tkp" , 3],
    ["iyiparti", 11],
    ["saadetpartisi", 1],
    ["btp" , 2],
    ["vatanpartisi" , 4],
    ["bbp" , 5],
    ["dp" , 9],
    ["bagimsiz", 0]

];

class City extends Component {
    constructor(props) {
        super(props);

    }
    static propTypes = {
        cityName : PropTypes.string,
        cityCode : PropTypes.number,
        path : PropTypes.string,
        result : PropTypes.object,
        colors : PropTypes.bool
    };

    determineFirstByColor = () => {
        const votes = this.props.result.results;
        let max = 0;
        let id = 0;
        for (let i = 0; i < votes.length ; i++){
            if ( Number(votes[i].voteCount) > max){
                max = Number(votes[i].voteCount);
                id = votes[i].id;
            }
        }
        for(let k = 0; k<parties.length ; k++){
            if (id===parties[k][1]){
                return parties[k][0];
            }
        }
        return "bagimsiz";
    };

    firstThreeParties = () => {
        const votes = this.props.result.results;
        const votesList = [];
        const firstThree = [];
        for (let i = 0; i < votes.length ; i++){
            votesList.push(Number(votes[i].voteCount));
        }
        votesList.sort(function(a, b){return a-b});
        for(let k = 0; k < votes.length ; k++){
            if (Number(votes[k].voteCount) === votesList[votesList.length-1] || Number(votes[k].voteCount) === votesList[votesList.length-2] || Number(votes[k].voteCount) === votesList[votesList.length-3]){
                firstThree.push(votes[k]);
            }
        }
        var result = "";
        firstThree.sort(function(a, b){return a-b});
        console.log(firstThree);
        for (let j = firstThree.length-1; j >= 0 ; j--){
            result += firstThree[j].name + firstThree[j].voteCount;
            result += "<br>";
        }
        return result;
    };

    clicked = () => {
        var el = document.getElementById("il-isimleri");
        el.innerHTML = this.props.cityName +
        "<br> <br>" + this.firstThreeParties();
    };

    determineFirstByTemp = () => {
        const votes = this.props.result.results;
        const votesList = [];
        for (let i = 0; i < votes.length ; i++){
            votesList.push(Number(votes[i].voteCount));
        }
        votesList.sort(function(a, b){return a-b});
        return (((votesList[votesList.length-1]-votesList[votesList.length-2])/((votesList[votesList.length-1]+votesList[votesList.length-2])))*10);
    };

    render() {

        const classParty = this.props.colors ? this.determineFirstByColor() : "none";
        const styleParty = !this.props.colors ? this.determineFirstByTemp() : "";
        return (

            <g
                id={this.props.cityCode}
                title={this.props.cityName}
                data-plakakodu={this.props.cityCode}
                data-iladi={this.props.cityName}
                fillOpacity={styleParty}
                className={classParty}
                onClick={this.clicked}>

                <path d={this.props.path}></path>
                
            </g>

        );
    }
}

export default City;
