function Topbar() {
    const { isDark, toggleTheme } = useTheme();
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    const handleVoiceSearch = () => {
        try {
            if ('webkitSpeechRecognition' in window) {
                const recognition = new webkitSpeechRecognition();
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    document.querySelector('.search-input').value = transcript;
                };
                recognition.start();
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="topbar" data-name="topbar">
            <div className="search-container" data-name="search">
                <i className="fas fa-search search-icon"></i>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Ask anything"
                    onClick={() => setIsSearchOpen(true)}
                />
                <i className="fas fa-microphone voice-icon" onClick={handleVoiceSearch}></i>
            </div>
            
            <div className="user-controls">
                <i 
                    className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} control-icon`}
                    onClick={toggleTheme}
                    data-name="theme-toggle"
                ></i>
                <div data-name="streak">
                    <i className="fas fa-fire control-icon"></i>
                    <span className="ml-1">5</span>
                </div>
                <i className="fas fa-bell control-icon" data-name="notifications"></i>
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80"
                    alt="Profile"
                    className="profile-image"
                    onClick={() => setIsProfileOpen(true)}
                    data-name="profile"
                />
            </div>

            {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
            {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}
        </div>
    );
}
