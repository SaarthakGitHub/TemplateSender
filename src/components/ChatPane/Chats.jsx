import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Chats = ({selectedWabaNumber, selectedChatNumber}) => {
  const [chats, setChats ] = useState([])
  useEffect(() => {
    axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatHistory/20/0?mobileNumber=${selectedChatNumber}&wabaNumber=${selectedWabaNumber}`)
      .then(response => {
        console.log(response.data.data.messages)
        setChats(response.data.data.messages)
      })
  },[selectedWabaNumber, selectedChatNumber])
  return (
    <div className='chat-component w-100'>
      {chats.length != 0 && chats.map(chatItem => {
        <p>{chatItem.messageText}</p>
      })}
    </div>
  )
}

export default Chats
