import React, { useState } from 'react';
import TemplateBar from './TemplateBar';
import Chats from './Chats';
import ChatHeader from './ChatHeader';

const ChatView = ({selectedChatHeader, selectedWabaNumber, selectedChatNumber}) => {
  const [state, setState] = useState("unchanged")
  return (
    <div className='d-flex flex-column h-100'>
      <ChatHeader selectedChatHeader={selectedChatHeader} />
      <Chats selectedWabaNumber={selectedWabaNumber} selectedChatNumber={selectedChatNumber} state={state}/>
      <TemplateBar selectedWabaNumber={selectedWabaNumber} selectedChatNumber={selectedChatNumber}/>
    </div>
  );
}

export default ChatView;