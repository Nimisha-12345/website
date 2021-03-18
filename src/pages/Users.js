import React, { Component } from 'react';


class Users extends React.Component{
    render(){
        return(
            <div>
                <div class="main-container">
      <div class="container1">
        <div class="text">
          <h2>Users
          </h2>
        </div>
        <table class="table-column">
    
  
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>last Name</th>
          <th>Email</th>
          <th>Type</th>
        </tr>
  
        <tr>
          <td>user121</td>
          <td>User1</td>
          <td>___</td>
          <td>22/02/2021</td>
          <td>Admin</td>
        </tr>
  
        <tr>
          <td>user122</td>
          <td>User2</td>
          <td>___</td>
          <td>18/02/2021</td>
          <td>Admin</td>
        </tr>
  
        <tr>
          <td>user123</td>
          <td>User3</td>
          <td>Test</td>
          <td>02/02/2021</td>
          <td>Admin</td>
        </tr>
  
        <tr>
          <td>user124</td>
          <td>user4</td>
          <td>___</td>
          <td>02/02/2021</td>
          <td>Maintainer</td>
        </tr>
  
        <tr>
          <td>user125</td>
          <td>user5</td>
          <td>___</td>
          <td>01/02/2021</td>
          <td>Developer</td>
        </tr>

        <tr>
            <td>user126</td>
            <td>User6</td>
            <td>___</td>
            <td>22/02/2021</td>
            <td>Developer</td>
          </tr>
    
          
      </table>
      </div>
      </div>

            </div>
        );
    }
}

export default Users;