import {React} from 'react';

function Product (props) {
    return (
        <div>
            <p>{props.name} | {props.price} | {props.discount}</p>
        </div>
    )
}

/* class Product extends Component {

    constructor (props) {
        super (props);
        this.state = {
            isLoaded: false,
            products: []
        }
    }

    componentDidMount() {
            fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result.products
                        });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render () {
            const {error, products} = this.state;
            if(error) {
                return <div>Error: {error.message}</div>;
            /* }else if (!isLoaded){
                return <div>Cargando...</div> */
            /*}else {
                return (
                    {products}
                );
            }            
    }
} */

export default Product;