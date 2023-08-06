import { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';

export default function Question({ id, question, correctAnswer, questionNumber, setScore, answerss }) {
    const handleAnswerClick = (selectedAnswerId) => {
        if (selectedAnswerId === correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    return (
        <div>
            <h3>Question {questionNumber}: {question}</h3>
            <div>Select the Correct Answer</div>
            {answerss && answerss.map(answer => (
                <Button 
                    key={answer.id} 
                    onClick={() => handleAnswerClick(answer.id)}>
                    {answer.text}
                </Button>
            ))}
        </div>
    );
}
