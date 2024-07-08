import { useState } from 'react';

const useMessage = () => {
  const [messageText, setMessageText] = useState<string>('');

  return {
    messageText,
    setMessageText,
  };
};

export default useMessage;
