import {React} from 'react';

function Counters (props) {
    return (
        <div className="App-content-basic">
            <h3>{props.titulo}</h3>
            <h1>{props.cantidad}</h1>
        </div>
    )
}

export default Counters;