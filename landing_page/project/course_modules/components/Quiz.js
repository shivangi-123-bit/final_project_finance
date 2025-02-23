function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [showResult, setShowResult] = React.useState(false);

  const handleAnswer = (index) => {
    try {
      setSelectedAnswer(index);
      setShowResult(true);
    } catch (error) {
      reportError(error);
    }
  };

  const nextQuestion = () => {
    try {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    } catch (error) {
      reportError(error);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container p-4" data-name="quiz">
      <h3 className="text-lg font-bold mb-4">{question.question}</h3>
      <div className="options-list space-y-2">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`p-3 border rounded cursor-pointer
              ${selectedAnswer === index ? 
                (index === question.correct ? 'bg-green-100' : 'bg-red-100') : 
                'hover:bg-gray-100'}`}
            onClick={() => handleAnswer(index)}
            data-name={`quiz-option-${index}`}
          >
            {option}
          </div>
        ))}
      </div>
      {showResult && (
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={nextQuestion}
            data-name="next-question-button"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
