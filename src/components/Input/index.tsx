import React, { useCallback } from 'react';
import useMessage from '@/Hooks/useMessage';

interface InputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
}

const Input = ({ onSubmit, disabled = false }: InputProps) => {
  const { messageText, setMessageText } = useMessage();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  }, [setMessageText]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageText.trim()) {
      onSubmit(messageText);
      setMessageText('');
    }
  }, [messageText, onSubmit, setMessageText]);

  return (
    <form onSubmit={handleSubmit} aria-label="Message input form">
      <input
        id="messageInput"
        type="text"
        value={messageText}
        onChange={handleChange}
        placeholder="Type your message..."
        aria-label="Message input"
        disabled={disabled}
      />
      <button 
        type="submit" 
        aria-label="Send message"
        disabled={disabled}
      >
        SEND
      </button>
    </form>
  );
};

Input.displayName = 'Input';

export default Input;