function Header({ darkMode, setDarkMode, openSearch, openProfile }) {
    const [isListening, setIsListening] = React.useState(false);

    const handleVoiceSearch = () => {
        try {
            if ('webkitSpeechRecognition' in window) {
                const recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;

                recognition.onstart = () => setIsListening(true);
                recognition.onend = () => setIsListening(false);
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    openSearch(transcript);
                };

                recognition.start();
            } else {
                alert('Voice recognition is not supported in your browser.');
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="header-wrapper">
            <div className="header" data-name="header">
                <div className="search-container" data-name="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Ask anything..."
                        onClick={() => openSearch()}
                        data-name="search-input"
                    />
                    <i
                        className={`fas ${isListening ? 'fa-microphone-slash' : 'fa-microphone'} voice-search`}
                        onClick={handleVoiceSearch}
                        data-name="voice-search"
                    ></i>
                </div>
                
                <div className="header-controls">
                    <div className="header-icon" onClick={() => setDarkMode(!darkMode)} data-name="theme-toggle">
                        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </div>

                    <div className="header-icon" data-name="streak-counter">
                        <i className="fas fa-fire"></i>
                        <span className="streak-count">7</span>
                    </div>

                    <div className="header-icon" data-name="notifications">
                        <i className="fas fa-bell"></i>
                    </div>

                    <div className="header-icon" onClick={openProfile} data-name="profile">
                        <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" 
                            alt="Profile" 
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
