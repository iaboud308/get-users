import React from 'react';
import User from './User';
import NewUserForm from './NewUserForm';

class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://asoat.herokuapp.com/api/users')
         .then( (response) => {
             return response.json();
         })
         .then( (data) => {
             this.setState({users: data.users})
         })
         .catch( (error) => {
             console.log(error)
         })
    }

    render() {

        return (
            <table className = 'table table-dark mt-4'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Encrypted Password</th>
                        <th>User Status</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.users.map( (user) => {
                   return <User key = {user._id} user = {user} />
                })}
                <NewUserForm />
                </tbody>
            </table>
        )
    }
}

export default Users;