function Quiz({ questions, onComplete }) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState({});
    const [showResults, setShowResults] = React.useState(false);
    const [timeLeft, setTimeLeft] = React.useState(900); // 15 minutes
    const [questionTimes, setQuestionTimes] = React.useState({});
    const [startTime, setStartTime] = React.useState(Date.now());
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleQuizComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        setStartTime(Date.now());
        setSubmitted(false);
    }, [currentQuestion]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleAnswer = (answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: answer
        });
    };

    const handleSubmit = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        setQuestionTimes({
            ...questionTimes,
            [currentQuestion]: timeSpent
        });
        setSubmitted(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleQuizComplete();
        }
    };

    const handleQuizComplete = () => {
        setShowResults(true);
    };

    if (showResults) {
        return (
            <QuizResult
                answers={selectedAnswers}
                questions={questions}
                timeSpent={questionTimes}
                totalTime={900 - timeLeft}
                onClose={() => onComplete()}
            />
        );
    }

    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="quiz-container" data-name="quiz-container">
            <div className="question-progress">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="quiz-timer" data-name="quiz-timer">
                Time Remaining: {formatTime(timeLeft)}
            </div>

            <h3 className="text-xl font-bold mb-4">Question {currentQuestion + 1} of {questions.length}</h3>
            <p className="text-lg mb-4">{question.question}</p>
            
            <div className="quiz-options" data-name="quiz-options">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        className={`quiz-option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
                        onClick={() => !submitted && handleAnswer(index)}
                        data-name={`quiz-option-${index}`}
                    >
                        {option}
                    </div>
                ))}
            </div>

            <div className="quiz-navigation">
                {!submitted ? (
                    <button
                        className="quiz-button submit"
                        onClick={handleSubmit}
                        disabled={selectedAnswers[currentQuestion] === undefined}
                        data-name="submit-answer"
                    >
                        Submit Answer
                    </button>
                ) : (
                    <button
                        className="quiz-button next"
                        onClick={handleNext}
                        data-name="next-question"
                    >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                )}
            </div>
        </div>
    );
}
