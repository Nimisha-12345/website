import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(

  <div class="main-container">
    <div class="main-contant">
      <div class="card">
        <div class="content">
          <div class="circle">
            <div class="c1">
            </div>
            <h3>200</h3>
            <p>users</p>
          </div>
        </div>
        
        <div class="content">
          <div class="circle">
            <div class="c1">
            </div>
            <h3>200</h3>
            <p>Projects</p>
          </div>
        </div>
        
        <div class="content">
          <div class="circle">
            <div class="c1">
            </div>
            <h3>200</h3>
            <p>Issues</p>
          </div>
        </div>
      </div>
      
      <div class="container" >
        <div class="text" >
          <h2>Recent Issues
            <span>View All</span>
          </h2>
        </div>
        <table class="table-column">
          
          <tr>
            <th>Issue</th>
            <th>Assigned To</th>
            <th>Assigned By</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>

          <tr>
            <td>Issue1</td>
            <td>User1</td>
            <td>User8</td>
            <td>22/02/2021</td>
            <td><button class="btn green">Recived</button></td>
          </tr>

          <tr>
            <td>Issue2</td>
            <td>User1</td>
            <td>User8</td>
            <td>18/02/2021</td>
            <td><button class="btn green">Recived</button></td>
          </tr>

          <tr>
            <td>Issue3</td>
            <td>User2</td>
            <td>User8</td>
            <td>02/02/2021</td>
            <td><button class="btn orange">Conflicts</button></td>
          </tr>

          <tr>
            <td>Issue4</td>
            <td>user3</td>
            <td>user8</td>
            <td>02/02/2021</td>
            <td><button class="btn red" >Overdue</button></td>
          </tr>

          <tr>
            <td>Issue5</td>
            <td>user2</td>
            <td>user8</td>
            <td>01/02/2021</td>
            <td><button class="btn green">Recived</button></td>
          </tr>
        </table>
      </div>
    </div>
    </div>
        );
    }
}

export default Home;