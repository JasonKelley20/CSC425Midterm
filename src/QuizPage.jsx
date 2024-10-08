
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
const QuizPage = () => {

  const navigate = useNavigate();
  const [quizComplete, setQuizComplete] = useState(false);
  const [showQuizIncorrect, setShowQuizIncorrect] = useState(false);
  const quizIncorrectMessage = "One or more answers to this quiz is incorrect. Please try again";

  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the Welcome page
  };

  const checkQuizAnswers = (event) => {
    event.preventDefualt();//this is supposed to stop the page from reloading when the form is submitted

    let answer1 = document.getElementById("true1").checked;
    let answer2 = docuemnt.getElementById("true2").checked;
    let answer3 = document.getElementById("true3").checked;

    if(answer1 == false && answer2 == true && answer3 ==false){
      setQuizComplete(true);
    } else {
      setShowQuizIncorrect(true);
    }
  }
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        {showQuizIncorrect && <h2 style="color:'red'">{quizIncorrectMessage}</h2>}
        <form onSubmit={checkQuizAnswers}>
          <label htmlFor="question1"><h3>Q1:</h3></label><br/>
          <h3>True or False: false</h3>
          <input type="radio" id="true1" name="question1" value="true" defaultChecked={true}/><br/>
          <input type="radio" id="false1" name="question1" value="false"/><br/>
          <br/><br/>
          <label htmlFor="question2"><h3>Q2:</h3></label><br/>
          <h3>True or False: true</h3>
          <input type="radio" id="true2" name="question2" value="true" defaultChecked={true}/><br/>
          <input type="radio" id="false2" name="question2" value="false"/><br/>
          <br/><br/>
          <label htmlFor="question1"><h3>Q3:</h3></label><br/>
          <h3>True or False: false</h3>
          <input type="radio" id="true3" name="question3" value="true" defaultChecked={true}/><br/>
          <input type="radio" id="false3" name="question3" value="false"/><br/>
          <br/><br/>
          <input type="submit" value="submit quiz"/>
        </form>

        <button disabled={false} onClick={goToWelcomePage}>Go to welcome page</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  