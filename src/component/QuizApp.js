import { Component, useState } from "react";
import { Questions } from "./Question";


function QuizApp() {

    const [chooseOption, setChooseOption] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0)

    const [showScore, setShowScore] = useState(false);

    const questions = Questions

    const handleAnswerClick = (answer) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
        setScore(answer ? score + 1 : score)
    }

    return (

        <div>
            {
                 showScore ?
                    (
                        <div> Your score is {score} out of {questions.length}</div>

                    ) :

                    (
                        <div>
                            <div>Question {currentQuestion + 1}/{questions.length} </div>
                            <div>{questions[currentQuestion].questionText}</div>
                            <div>
                                {
                                    questions[currentQuestion].answerOptions.map((answerOption) =>
                                        <button onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    )}
                            </div>
                        </div>
                    )
            }
        </div>

    );

}
export default QuizApp