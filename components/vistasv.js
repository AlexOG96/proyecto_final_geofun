import React from 'react';
import ReactStreetview from 'react-streetview';


class Vistasv extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return(
            <div style={{height: 800}}>
                <ReactStreetview
                    apiKey={'AIzaSyDlHJEzjw5cJBiw6-6R-0s2pd55sf_0W08'}
                    streetViewPanoramaOptions={this.props.opcionespanorama}
                    //onZoomChange={() => this.posicionCambiada()}
                />
            </div>
        );
    }
}

//estilos
export default Vistasv;