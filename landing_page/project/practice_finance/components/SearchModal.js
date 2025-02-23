function SearchModal({ isOpen, onClose, initialQuery = '' }) {
    const [query, setQuery] = React.useState(initialQuery);
    const [messages, setMessages] = React.useState([]);

    const handleSearch = async () => {
        try {
            if (!query.trim()) return;
            
            const newMessage = { role: 'user', content: query };
            setMessages([...messages, newMessage]);
            
            const response = await invokeAIAgent(
                "You are a financial education expert. Provide clear, concise answers to finance-related questions.",
                query
            );
            
            setMessages([...messages, newMessage, { role: 'ai', content: response }]);
            setQuery('');
        } catch (error) {
            reportError(error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-name="search-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">AI Financial Assistant</h2>
                    <i className="fas fa-times modal-close" onClick={onClose}></i>
                </div>
                
                <div className="chat-messages mb-4 max-h-96 overflow-y-auto" data-name="chat-messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded mb-2 ${
                                msg.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                            }`}
                            data-name={`chat-message-${index}`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>

                <div className="flex gap-2" data-name="chat-input">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="Ask about finance..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
