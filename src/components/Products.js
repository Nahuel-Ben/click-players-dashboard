import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Products extends Component {

    constructor (props) {
        super (props);
        this.state = {
            products: ''
        }
    }

    apiCall (url, consecuencia) {
            fetch (url)
                .then (response => response.json())
                .then (data => consecuencia(data))
                .catch (error => console.log (error))
    }

    componentDidMount() {
            console.log ('Montado')
            this.apiCall ('http://localhost:4000/api/products')

    }

    mostrarProducts = (data) => {
        this.setState (
            {
                products: data.meta
            }
        )
    }

    componentDidUpdate() {
        console.log ('Actualizado')
    }

    render () {
            console.log ('Renderizando')

            let contenido;

            if (this.state.products === '') {
                    contenido = <p>Cargando....</p>
            }else {
                return (
                    <div>
                        {contenido}
                    </div>
                )
            }
            
    }
}

export default Products;