import React from 'react';
import User from './User';
import NewUserForm from './NewUserForm';

class Users extends React.Component {

    state = {
        users: [],
        refresh: false
    }

    componentDidMount() {
        this.fetchUsers();
    }


    fetchUsers = () => {
        fetch('https://asoat.herokuapp.com/api/users')
         .then( (response) => {
             return response.json();
         })
         .then( (data) => {
             this.setState({users: data.users})
             this.setState({ refresh: false })
         })
         .catch( (error) => {
             console.log(error)
         })
    }


    refreshUsers = () => {
        this.setState({ refresh: true })
    }

    
    render() {

        if (this.state.refresh === true) {
            this.fetchUsers();
        }

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
                   return <User key = {user._id} user = {user} refresh = { this.refreshUsers } />
                })}
                <NewUserForm refresh = { this.refreshUsers }/>
                </tbody>
            </table>
        )
    }
}

export default Users;