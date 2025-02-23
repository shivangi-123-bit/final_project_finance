function ProfileModal({ onClose }) {
    const userData = {
        username: "John Doe",
        email: "john@example.com",
        currentStreak: 5,
        maxStreak: 15
    };

    const handleLogout = () => {
        try {
            // Implement logout logic here
            onClose();
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="modal-overlay" data-name="profile-modal">
            <div className="modal-content max-w-md">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">Profile</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="profile-info space-y-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80"
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="font-bold">{userData.username}</h3>
                            <p className="text-gray-500">{userData.email}</p>
                        </div>
                    </div>
                    <div className="streak-info">
                        <p>Current Streak: {userData.currentStreak} days 🔥</p>
                        <p>Max Streak: {userData.maxStreak} days ⭐</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
