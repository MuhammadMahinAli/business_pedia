// import  { useState } from 'react';
// import axios from 'axios';


// const Chatbot1 = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     const userMessage = { sender: 'user', text: input };
//     setMessages([...messages, userMessage]);
//     setInput('');

//     try {
//       const response = await axios.post('http://localhost:3000/analyze', { query: input });
//       const botMessage = { sender: 'bot', text: response.data.suggestions };
//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//       const errorMessage = { sender: 'bot', text: 'Sorry, there was an error processing your request.' };
//       setMessages([...messages, userMessage, errorMessage]);
//     }
//   };

//   return (
//     <div className="chatbot">
//       <div className="chat-window">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//           placeholder="Type a message..."
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot1;
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
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
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
  );
};

export default Chatbot1;

