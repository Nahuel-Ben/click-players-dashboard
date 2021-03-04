import React, {Component} from 'react';

class Product extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
                meta: {},
                data: []
            }
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/products")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    meta: result.meta,
                    products: result.data
                    });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.data.name} | {this.state.data.price} | {this.state.data.discount}</p>
            </div>
        )

    }
}
/* function Product (props) {
    return (
        <div>
            <p>{props.name} | {props.price} | {props.discount}</p>
        </div>
    )
} */


export default Product;