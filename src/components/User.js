import {React} from 'react';

function User (props) {
    return (
        <div>
            <p>{props.name} | {props.email}</p>
        </div>
    )
}


export default User;