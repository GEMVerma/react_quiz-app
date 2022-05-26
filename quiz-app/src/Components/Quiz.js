import React, {useState, useContext} from 'react' ;
import {QuizContext} from "../Helpers/Contexts";
import {Questions} from "../Helpers/QuestionBank";

function Quiz() {
    const {score, setScore, setGameState} = useState(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0) ;
    const [optionChosen, setOptionChosen] = useState("") ;
    
    const chooseOption = (option) => {
        setOptionChosen(option) ;
    };

    const nextQuestion = () =>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score + 1);
        }
        setGameState("endscreen");
    };

    return(
        <div className='Quiz'>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => chooseOption("A")}>{Questions[currQuestion].optionA}{""}</button>
                <button onClick={() => chooseOption("B")}>{Questions[currQuestion].optionB}{""}</button>
                <button onClick={() => chooseOption("C")}>{Questions[currQuestion].optionC}{""}</button>
                <button onClick={() => chooseOption("D")}>{Questions[currQuestion].optionD}{""}</button>
            </div>

            {currQuestion == Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ):(
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz ;