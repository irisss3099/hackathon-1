import React from 'react';
import styles from './styles.module.css';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
  const messageClass = sender === 'user' ? styles.userMessage : styles.botMessage;
  return (
    <div className={`${styles.chatMessage} ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
