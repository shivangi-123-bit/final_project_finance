function App() {
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    React.useEffect(() => {
        try {
            initTheme();
        } catch (error) {
            reportError(error);
        }
    }, []);

    return (
        <div className="flex" data-name="app">
            <Sidebar />
            <div className="flex-1">
                <Header onProfileClick={() => setIsProfileOpen(true)} />
                <div className="dashboard-container">
                    <WelcomeBox />
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <ProgressTracker />
                        <div className="grid grid-rows-2 gap-6">
                            <ActivityHeatMap />
                            <BudgetTracker />
                        </div>
                    </div>
                    <StatsBar />
                    <LevelUpSection />
                </div>
            </div>
            <ProfileModal 
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
