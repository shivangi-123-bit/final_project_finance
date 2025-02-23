function StatsBar() {
    const stats = [
        { icon: "fa-coins", value: "1000", label: "Coins" },
        { icon: "fa-fire", value: "15", label: "Streak" },
        { icon: "fa-trophy", value: "6/30", label: "Achievements" },
        { icon: "fa-piggy-bank", value: "Savings Pro", label: "Level" }
    ];

    return (
        <div className="stats-bar" data-name="stats-bar">
            {stats.map((stat, index) => (
                <div 
                    key={index}
                    className="stats-item hover:shadow-lg transition-shadow"
                    data-name={`stat-${stat.label.toLowerCase()}`}
                >
                    <div className="flex items-center">
                        <i className={`fas ${stat.icon} text-2xl text-blue-500 mr-3`}></i>
                        <div>
                            <div className="font-bold">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
