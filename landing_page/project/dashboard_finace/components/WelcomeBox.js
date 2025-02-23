function WelcomeBox() {
    return (
        <div className="welcome-box flex justify-between items-center" data-name="welcome-box">
            <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
                <p className="text-gray-600">
                    "The best investment you can make is in yourself." - Warren Buffett
                </p>
            </div>
            <img 
                src="https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg" 
                alt="Finance Growth Illustration" 
                className="w-64 h-48 rounded-lg object-cover shadow-lg"
            />
        </div>
    );
}
