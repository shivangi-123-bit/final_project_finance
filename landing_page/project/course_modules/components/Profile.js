function Profile({ isOpen, onClose, progress }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" data-name="profile-modal">
      <div className="modal" data-name="profile-content">
        <button className="modal-close" onClick={onClose} data-name="close-button">
          <i className="fas fa-times"></i>
        </button>
        
        <div className="profile-header">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop"
            alt="Profile"
            className="profile-avatar"
            data-name="profile-avatar"
          />
          <div className="profile-info">
            <h3 className="profile-name">John Doe</h3>
            <p className="profile-username">@johndoe</p>
            <p className="profile-email">john.doe@example.com</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">15</div>
            <div className="stat-label">Day Streak</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{progress}%</div>
            <div className="stat-label">Complete</div>
          </div>
        </div>

        <button
          className="logout-button"
          data-name="logout-button"
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
}
