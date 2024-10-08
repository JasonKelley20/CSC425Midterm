
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

const LoginPage = () => {

  const navigate = useNavigate();
  const [userValidated, setUserValidated] = useState(false);
  const acceptedUsers = {
    "user1": {"uname" : "Jason1", "pwd" : "password"}, 
    "user2": {"uname":"jason2", "pwd":"Password"}
  };

  //check to see if the user's inputted uname and pwd is found in the acceptedUsers data
  const checkUserLogin = (e) =>{
    e.preventDefault();
    console.log("in function")
    let uname = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    console.log(uname);
    console.log(password);

    console.log(acceptedUsers.size);
    for(let i=0; i<acceptedUsers.size; i++){
      console.log(acceptedUsers[i]);
        if(acceptedUsers[i].get("uname") == uname && acceptedUsers[i].get("pwd") == password){
          setUserValidated(true);
          console.log("user verified");
        }
    }
    console.log(acceptedUsers);
}

  //allow the user to proceed (will only fire once button is enabled by user validation)
  const goToLoginPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };

    return (
      <div>
        <h1>Login Here</h1>
        <form onSubmit={checkUserLogin}>
              <label htmlFor="usernameInput">Username: </label><br/>
              <input type="text" id="usernameInput" name="usernameInput"/><br/>
              <label htmlFor="passwordInput">Password: </label><br/>
              <input type="text" id="passwordInput" name="passwordInput"/><br/>
              <input type="submit" value="submit"/>
          </form>
        <p>This is the Login Page.</p>
        <button disabled={false} onClick={goToLoginPage}>Take Qualifier Quiz</button>
      </div>
    );
  };
  
  export default LoginPage;
  