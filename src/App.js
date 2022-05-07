import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the sum of 130+125+191?',
			answerOptions: [
				{ answerText: '335', isCorrect: false },
				{ answerText: '456', isCorrect: false },
				{ answerText: '446', isCorrect: true },
				{ answerText: '426', isCorrect: false },
			],
		},
		{
			questionText: '110 divided by 10 is',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '11', isCorrect: true },
				{ answerText: '1100', isCorrect: false },
				{ answerText: 'None Of These', isCorrect: false },
			],
		},
		{
			questionText: 'What is the next prime number after 5?',
			answerOptions: [
				{ answerText: '6', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '10', isCorrect: false },
			],
		},
		{
			questionText: 'If we minus 712 from 1500, how much do we get?',
			answerOptions: [
				{ answerText: '708', isCorrect: false },
				{ answerText: '828', isCorrect: false },
				{ answerText: '768', isCorrect: false },
				{ answerText: '788', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}