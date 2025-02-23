function App() {
    const [darkMode, setDarkMode] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('practice');
    const [showSearchModal, setShowSearchModal] = React.useState(false);
    const [showProfileModal, setShowProfileModal] = React.useState(false);
    const [selectedPack, setSelectedPack] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    React.useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light';
    }, [darkMode]);

    const handlePackSelect = (pack) => {
        setSelectedPack(pack);
    };

    const handleQuizComplete = () => {
        setSelectedPack(null);
    };

    const openSearch = (initialQuery = '') => {
        setSearchQuery(initialQuery);
        setShowSearchModal(true);
    };

    return (
        <div className="main-container" data-name="main-container">
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            
            <div className="content-wrapper">
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    openSearch={openSearch}
                    openProfile={() => setShowProfileModal(true)}
                />

                <div className="main-content">
                    {activeItem === 'practice' && !selectedPack && (
                        <div className="practice-grid">
                            {practiceData.map(pack => (
                                <PracticeCard
                                    key={pack.id}
                                    title={pack.title}
                                    icon={pack.icon}
                                    description={pack.description}
                                    thumbnail={pack.thumbnail}
                                    onClick={() => handlePackSelect(pack)}
                                />
                            ))}
                        </div>
                    )}

                    {selectedPack && (
                        <Quiz
                            questions={selectedPack.questions}
                            onComplete={handleQuizComplete}
                        />
                    )}
                </div>
            </div>

            <SearchModal
                isOpen={showSearchModal}
                onClose={() => setShowSearchModal(false)}
                initialQuery={searchQuery}
            />

            <ProfileModal
                isOpen={showProfileModal}
                onClose={() => setShowProfileModal(false)}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
