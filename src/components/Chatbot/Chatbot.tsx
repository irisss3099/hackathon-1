import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import styles from './styles.module.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newUserMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userQuery: newUserMessage.text }),
      });

      const data = await response.json();

      let botMessage: Message;
      if (response.ok && data.answer) {
        botMessage = { text: data.answer, sender: 'bot' };
      } else {
        botMessage = { text: data.error || 'Sorry, I could not get a response.', sender: 'bot' };
      }
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with backend:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'There was an error connecting to the chatbot server.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className={styles.chatToggleButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : 'Chat'}
      </button>

      {isOpen && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatHeader}>Docusaurus Chatbot</div>
          <div className={styles.chatMessages}>
            {messages.length === 0 && !isLoading && (
              <p className={styles.welcomeMessage}>Hello! How can I help you with the documentation?</p>
            )}
            {messages.map((msg, index) => (
              <ChatMessage key={index} text={msg.text} sender={msg.sender} />
            ))}
            {isLoading && <ChatMessage text="Typing..." sender="bot" />}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
