function QuizResult({ answers, questions, timeSpent, totalTime, onClose }) {
    const correctCount = Object.values(answers).reduce((count, answer, index) => 
        count + (answer === questions[index].correct ? 1 : 0), 0);
    const wrongCount = Object.values(answers).length - correctCount;
    const skippedCount = questions.length - Object.values(answers).length;
    const xpPoints = correctCount; // 1 XP per correct answer

    const averageTimePerQuestion = Math.round(Object.values(timeSpent).reduce((a, b) => a + b, 0) / Object.values(timeSpent).length);

    React.useEffect(() => {
        try {
            const ctx = document.getElementById('resultsChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Correct', 'Wrong', 'Skipped'],
                    datasets: [{
                        data: [correctCount, wrongCount, skippedCount],
                        backgroundColor: ['#4ade80', '#f87171', '#94a3b8'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });

            const timeCtx = document.getElementById('timeChart').getContext('2d');
            new Chart(timeCtx, {
                type: 'bar',
                data: {
                    labels: questions.map((_, i) => `Q${i + 1}`),
                    datasets: [{
                        label: 'Time Spent (seconds)',
                        data: Object.values(timeSpent),
                        backgroundColor: '#60a5fa',
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } catch (error) {
            reportError(error);
        }
    }, []);

    return (
        <div className="quiz-result-container" data-name="quiz-result-container">
            <div className="xp-rule" data-name="xp-rule">
                <div className="xp-star">⭐</div>
                <p>Each correct answer earns you 1 XP point!</p>
            </div>

            <div className="result-stats" data-name="result-stats">
                <div className="stat-card">
                    <i className="fas fa-trophy text-yellow-500"></i>
                    <h3>XP Earned</h3>
                    <p className="stat-value">{xpPoints}</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-check text-green-500"></i>
                    <h3>Correct</h3>
                    <p className="stat-value">{correctCount}</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-times text-red-500"></i>
                    <h3>Wrong</h3>
                    <p className="stat-value">{wrongCount}</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-forward text-gray-500"></i>
                    <h3>Skipped</h3>
                    <p className="stat-value">{skippedCount}</p>
                </div>
            </div>

            <div className="stat-card mb-6">
                <i className="fas fa-clock text-blue-500"></i>
                <h3>Total Time</h3>
                <p className="stat-value">{Math.round(totalTime / 60)}m {totalTime % 60}s</p>
            </div>

            <div className="charts-container" data-name="charts-container">
                <div className="chart-box">
                    <h3>Performance Overview</h3>
                    <canvas id="resultsChart"></canvas>
                </div>
                <div className="chart-box">
                    <h3>Time Spent per Question</h3>
                    <canvas id="timeChart"></canvas>
                </div>
            </div>

            <button
                className="close-button"
                onClick={onClose}
                data-name="close-result"
            >
                Continue Learning
            </button>
        </div>
    );
}
