function Header({ onProfileClick }) {
    const [isDark, setIsDark] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [isAIModalOpen, setIsAIModalOpen] = React.useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    };

    const handleSearch = async (e) => {
        try {
            setSearchValue(e.target.value);
            if (e.target.value.trim()) {
                setIsAIModalOpen(true);
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleVoiceSearch = async () => {
        try {
            await handleVoiceSearch();
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="header flex justify-between items-center" data-name="header">
            <div className="search-box flex items-center" data-name="search-box">
                <i className="fas fa-search mr-2"></i>
                <input
                    type="text"
                    placeholder="Ask your AI assistant..."
                    className="bg-transparent outline-none w-full"
                    value={searchValue}
                    onChange={handleSearch}
                />
                <i 
                    className="fas fa-microphone ml-2 cursor-pointer text-purple-600 text-xl"
                    onClick={handleVoiceSearch}
                ></i>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="header-icon" onClick={toggleTheme} data-name="theme-toggle">
                    <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
                </div>
                <div className="header-icon" data-name="streak">
                    <i className="fas fa-fire text-2xl"></i>
                </div>
                <div className="header-icon" data-name="notifications">
                    <i className="fas fa-bell text-2xl"></i>
                </div>
                <div 
                    className="header-icon" 
                    onClick={onProfileClick} 
                    data-name="profile"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>

            {isAIModalOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setIsAIModalOpen(false)}
                >
                    <div 
                        className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">AI Assistant</h2>
                            <button onClick={() => setIsAIModalOpen(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <p>{searchValue}</p>
                            </div>
                            <div className="bg-indigo-50 p-3 rounded-lg">
                                <p>How can I help you with your financial education today?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
