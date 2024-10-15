import { useState } from 'react';
import { ChatGPTAPI } from 'openai';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const api = new ChatGPTAPI({ apiKey: 'your-api-key' });
    const result = await api.complete({
      prompt: message,
      maxTokens: 60,
    });
    setResponse(result.choices[0].text);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2">Send</button>
      <p className="p-2">{response}</p>
    </div>
  );
};

export default ChatBot;
