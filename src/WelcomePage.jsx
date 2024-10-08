
import { useNavigate } from 'react-router-dom';
import React from 'react';
const WelcomePage = () => {

  const navigate = useNavigate();

  const goToQuizPage = () => {
    navigate('/quiz'); // Navigate to the home page
  };
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>

        <button onClick={goToQuizPage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  