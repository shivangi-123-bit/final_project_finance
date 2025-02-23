function Topbar() {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { calculateProgress } = useModules();
  const progress = calculateProgress();

  return (
    <div className="topbar" data-name="topbar">
      <SearchBox />
      
      <div className="icons-group">
        <button 
          className="icon-button theme-toggle" 
          onClick={toggleTheme}
          data-name="theme-toggle"
        >
          <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>

        <button className="icon-button" data-name="streak-button">
          <i className="fas fa-fire"></i>
          <span className="ml-1">15</span>
        </button>
        
        <button className="icon-button" data-name="notifications-button">
          <i className="fas fa-bell"></i>
        </button>
        
        <button
          className="profile-button"
          onClick={() => setIsProfileOpen(true)}
          data-name="profile-button"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
            alt="Profile"
            className="profile-image"
          />
        </button>
      </div>

      <Profile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        progress={progress}
      />
    </div>
  );
}
