import React, { useState,useEffect } from 'react';
import axios from "axios";


function Users() {
    const[users,setUsers]=useState([])
    console.log(users)
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://localhost:4000/users');
            setUsers(response.data); 
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);
  return (
    <div style={{background:"white",height:"600px",width:"900px"}}>
        <h1>Users</h1>
        <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
       
        </div>
  )
}

export default Users