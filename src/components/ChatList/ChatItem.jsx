import React from 'react';
import Profile from './Profile';

const ChatItem = ({receiver, contact, lastMessage, setSelectedChat}) => {

    const handleChatClick = () => {
        setSelectedChat({
            receiver,
            contact,
            lastMessage
        })
    }

  return (
    <li className='d-flex align-items-center vw-25 vh-25 mt-2 border-bottom border-2 chat-item' onClick={handleChatClick}>
        <Profile char={receiver ? receiver.charAt(0) : contact.charAt(0)}/>
        <div className='flex-column d-flex'>
            <div>{receiver ? receiver : contact}</div>
            <div className='text-muted'>{lastMessage || "No message yet"}</div>
        </div>
        
    </li>

  )
}

export default ChatItem;