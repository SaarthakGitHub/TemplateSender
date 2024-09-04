import './App.css';
import { useState } from 'react';
import MiddlePane from './components/ChatList/ListView';
import ChatView from './components/ChatPane/ChatView';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [chats,setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState({})
  const [selectedWabaNumber, setSelectedWabaNumber] = useState('')

  return (
    <div className="App">
      <div className="middle-pane">
        <MiddlePane
          chats={chats}
          setChats={setChats}
          setSelectedChat={setSelectedChat}
          selectedWabaNumber={selectedWabaNumber}
          setSelectedWabaNumber={setSelectedWabaNumber}
        />
      </div>
      <div className="right-pane walpaper">
        <ChatView
          selectedChatHeader={
            selectedChat.receiver ? selectedChat.receiver : selectedChat.contact
          }
          selectedWabaNumber={selectedWabaNumber}
          selectedChatNumber={selectedChat.contact}
        />
      </div>
    </div>
  );
}

export default App;
