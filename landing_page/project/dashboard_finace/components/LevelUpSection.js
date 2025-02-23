function LevelUpSection() {
    const improvements = [
        "Mutual Funds Basics",
        "Index Fund Investing",
        "Emergency Fund Planning",
        "Tax-Efficient Investing"
    ];

    return (
        <div className="level-up-section" data-name="level-up-section">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Level Up Your Money Game</h2>
                    <ul className="space-y-2">
                        {improvements.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <i className="fas fa-arrow-right text-indigo-500 mr-2"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <img 
                    src="https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-3185.jpg" 
                    alt="Level Up Illustration" 
                    className="w-48 h-32 rounded-lg object-cover shadow-lg"
                />
            </div>
        </div>
    );
}
