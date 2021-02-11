import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import userService from '../../service/userService';

const UserPage = (props) => {
  const [users, setUsers] = useState([{}]);
  const [change, setChange] = useState({});
  useEffect(()=>{
    userService.getUsers().then(res => {
      setUsers(res.data)
      console.log(res.data)
    })
  }, [props, change])
  

return (
    <div>
      <h1 className="text-center">User List</h1>
      <table className="table">
        <thead>
          <tr>
            <td>User Id</td>
            <td>User First Name</td>
            <td>User Last Name</td>
            <td>User Email</td>
            <td>User Group</td>
          </tr>
          
        </thead>
        <tbody>
          {users.map(
              user =>
              <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.group}</td>
              </tr>)}
        </tbody>

      </table>

    </div>
  );
}

export default UserPage;
