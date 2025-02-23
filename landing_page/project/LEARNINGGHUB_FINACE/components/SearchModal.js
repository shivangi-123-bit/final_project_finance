function SearchModal({ onClose }) {
    const [messages, setMessages] = React.useState([]);
    const [input, setInput] = React.useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!input.trim()) return;

            const newMessage = { role: 'user', content: input };
            setMessages(prev => [...prev, newMessage]);
            setInput('');

            const response = await invokeAIAgent(
                "You are a financial education assistant. Help users with their financial questions.",
                input
            );

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="modal-overlay" data-name="search-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">AI Assistant</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="messages-container h-96 overflow-y-auto mb-4">
                    {messages.map((msg, idx) => (
                        <div 
                            key={idx}
                            className={`p-3 rounded-lg mb-2 ${
                                msg.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow p-2 rounded border"
                        placeholder="Type your question..."
                    />
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
