function ProfileModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const userData = {
        username: "Alex Johnson",
        email: "alex@example.com",
        currentStreak: 15,
        maxStreak: 30
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={onClose}
            data-name="profile-modal"
        >
            <div 
                className="bg-white p-6 rounded-lg w-96"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Profile</h2>
                    <button onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="text-gray-600">Username</label>
                        <p className="font-semibold">{userData.username}</p>
                    </div>
                    <div>
                        <label className="text-gray-600">Email</label>
                        <p className="font-semibold">{userData.email}</p>
                    </div>
                    <div>
                        <label className="text-gray-600">Current Streak</label>
                        <p className="font-semibold">{userData.currentStreak} days</p>
                    </div>
                    <div>
                        <label className="text-gray-600">Max Streak</label>
                        <p className="font-semibold">{userData.maxStreak} days</p>
                    </div>
                    
                    <button 
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                        onClick={() => {
                            try {
                                // Handle logout
                                onClose();
                            } catch (error) {
                                reportError(error);
                            }
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
