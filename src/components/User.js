import React, {Component} from 'react';

class User extends React.Component {

    constructor(props) {
        super(props)
            this.state = {
                meta: {},
                data: []
            }
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/users")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    meta: result.meta,
                    users: result.data
                    });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    render(){
        return (
            <div>
                <p>{this.state.data.first_name} | {this.state.data.email}</p>
            </div>
        )
    }
}


export default User;