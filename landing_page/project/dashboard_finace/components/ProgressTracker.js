function ProgressTracker() {
    const progress = 40; // 40% progress

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg h-[200px] flex items-center justify-center" data-name="progress-tracker">
            <div className="progress-circle">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#eee"
                        strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4f46e5"
                        strokeWidth="3"
                        strokeDasharray={`${progress}, 100`}
                        style={{transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-indigo-600">{progress}%</span>
                </div>
            </div>
        </div>
    );
}
