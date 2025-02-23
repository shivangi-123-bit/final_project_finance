function ActivityHeatMap() {
    const generateHeatMapData = () => {
        const data = [];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                data.push({
                    intensity: Math.floor(Math.random() * 4)
                });
            }
        }
        return data;
    };

    const heatMapData = generateHeatMapData();

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm" data-name="activity-heatmap">
            <h2 className="text-xl font-semibold mb-4">Activity</h2>
            <div className="grid grid-cols-7 gap-1">
                {heatMapData.map((day, index) => (
                    <div
                        key={index}
                        className={`w-6 h-6 rounded-sm bg-blue-${day.intensity * 200}`}
                        title={`${day.intensity} activities`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
