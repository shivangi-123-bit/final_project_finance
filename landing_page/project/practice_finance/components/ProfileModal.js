function ProfileModal({ isOpen, onClose }) {
    const userData = {
        username: "JohnDoe",
        email: "john@example.com",
        currentStreak: 7,
        maxStreak: 15
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-name="profile-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">Profile</h2>
                    <i className="fas fa-times modal-close" onClick={onClose}></i>
                </div>

                <div className="profile-info space-y-4" data-name="profile-info">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-user text-3xl"></i>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p><strong>Username:</strong> {userData.username}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Current Streak:</strong> {userData.currentStreak} 🔥</p>
                        <p><strong>Max Streak:</strong> {userData.maxStreak} 🏆</p>
                    </div>

                    <button
                        className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => {
                            // Handle logout
                            onClose();
                        }}
                        data-name="logout-button"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
