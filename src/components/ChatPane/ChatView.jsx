import React from 'react';
import TemplateBar from './TemplateBar';
import Chats from './Chats';
import ChatHeader from './ChatHeader';

const ChatView = ({selectedChatHeader, selectedWabaNumber, selectedChatNumber}) => {
  return (
    <div className='d-flex flex-column h-100'>
      <ChatHeader selectedChatHeader={selectedChatHeader} />
      <Chats selectedWabaNumber={selectedWabaNumber} selectedChatNumber={selectedChatNumber}/>
      <TemplateBar selectedWabaNumber={selectedWabaNumber} selectedChatNumber={selectedChatNumber}/>
    </div>
  );
}

export default ChatView;