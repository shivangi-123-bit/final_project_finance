async function handleVoiceSearch() {
    try {
        if (!('webkitSpeechRecognition' in window)) {
            throw new Error('Voice recognition not supported');
        }

        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            // Handle the voice input
        };

        recognition.start();
    } catch (error) {
        reportError(error);
    }
}
