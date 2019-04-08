import React, {Component} from 'react'

import Country from '../components/Country';
import { Button } from 'react-bootstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : true
        };
    };
    tempMap = () =>{
      this.setState({
          colors : false
      });
    };
    colorMap = () => {
        this.setState({
            colors : true
        });
    };
    render() {
        return (
           <div>
               <div id={"il-isimleri"} className={"il-isimleri"}></div>
               <div className={"svg-turkiye-haritasi"}>
                   <Country colors={this.state.colors}></Country>
               </div>
               <div className={"buttonContainer"}>
                   <Button className={"changeColorButton"} onClick={this.colorMap}>Renkli harita</Button>
                   <Button className={"changeColorButton"} onClick={this.tempMap}>Isı haritası</Button>
               </div>
           </div>
        );
    }
}

export default Content;
