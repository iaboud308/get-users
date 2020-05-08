import React from 'react';



class User extends React.Component {

    deleteHandler = (_id) => {
    
        fetch('https://asoat.herokuapp.com/api/users/delete', {
            method: 'DELETE',
            body: JSON.stringify(_id),
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
         .then( (response) => {
             return response.json();
         })
          .then( (data) => {
              console.log(data);
          })
           .catch( (error) => {
               console.log(error);
           })
    }

    render() {
        const { _id, firstName, lastName, email, password, userStatus} = this.props.user;
        return (
            <tr>
            <td>{firstName}</td> 
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{userStatus}</td>
            <td>
                <button className = 'btn btn-danger btn-sm'
                onClick = {(event) => {
                    this.deleteHandler(_id);
                }}>Delete</button>
            </td>
        </tr>
        )
    }
}



export default User;