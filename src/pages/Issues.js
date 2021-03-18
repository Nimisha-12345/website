import React , {Component} from 'react';

class Issues extends React.Component{
    render(){
        return(
            <div>
                <div id="overlay"></div>
                 <div class="main-container1">
      <div class="container1">
        <div class="text">
          <h2>Issues</h2>
            <button class="button" id="add_issues">Add Issue</button>
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
          <td><button class="btn red">Overdue</button></td>
        </tr>
  
        <tr>
          <td>Issue5</td>
          <td>user2</td>
          <td>user8</td>
          <td>01/02/2021</td>
          <td><button class="btn green">Recived</button></td>
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
            <td><button class="btn red">Overdue</button></td>
          </tr>
    
          <tr>
            <td>Issue4</td>
            <td>user3</td>
            <td>user8</td>
            <td>02/02/2021</td>
            <td><button class="btn red">Overdue</button></td>
          </tr>
      </table>
      </div>
      </div>

      <div id="login-form" class="login-page">
      <div class="form-box">
        <div class="button-box">
          <div id="btn"></div>
          <span>Add Issue</span>
        </div>
        <form id="login" class="input-group-login">
          <div class="page">
          <label>Title*</label>
          <input type="text" class="input-field" placeholder="Some Issue title" required />
          </div>
          <div class="page">
            <label>Description</label>
          <input type="text" class="input-field" placeholder="" required />
          </div>
          <div class="page">
            <label>Assign To*</label>
            <input type="text" class="input-field" placeholder="" required />
            </div>
           <div class="next">
          <button type="submit" id="close" class="submit-btn">Cancel</button>
          <button type="submit" class="submit-btn  submit-btn1">Add</button>
           </div>
        </form>
      </div>
  </div>
            </div>

        );
    }
}

export default Issues
