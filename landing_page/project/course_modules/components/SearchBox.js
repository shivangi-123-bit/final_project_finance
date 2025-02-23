function SearchBox() {
  const [isListening, setIsListening] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const startVoiceRecognition = () => {
    try {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setSearchText(transcript);
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
    <div className="search-box" data-name="search-box">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for modules, topics, or resources..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        data-name="search-input"
      />
      <i
        className={`fas ${isListening ? 'fa-microphone-slash' : 'fa-microphone'}`}
        onClick={startVoiceRecognition}
        data-name="voice-search-button"
      ></i>
    </div>
  );
}
