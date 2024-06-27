import { useState } from 'react';
import axios from 'axios';

const Chatbot1 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:3000/analyze', { query: input });
      const botMessage = { sender: 'bot', text: response.data.suggestions };
      setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, there was an error processing your request.' };
      setMessages(prevMessages => [...prevMessages, userMessage, errorMessage]);
    }
  };

  return (
    <div
        className="p-[1px] bg-gradient-to-r from-[#4EEBFF] from-10% via-[#AA62F9] via-30% to-[#F857FF] to-90% rounded-[10px]"
      >
    <div className="chatbot bg-[url('/gradient-background1.png')] bg-no-repeat bg-cover h-[590px] w-[500px]">
      <div className="chat-window  bg-[url('/gradient-background1.png')] bg-no-repeat bg-cover">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender} ] border text-white`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default Chatbot1;

