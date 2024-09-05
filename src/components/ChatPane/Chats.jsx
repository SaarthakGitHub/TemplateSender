import React,{useEffect, useState} from 'react'
import axios from 'axios';
import ChatComponent from './ChatComponent';
import InfiniteScroll from 'react-infinite-scroll-component';

const Chats = ({selectedWabaNumber, selectedChatNumber, state}) => {
  const [chats, setChats ] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const retrieveChats = () => {
    setCurrentPage(0)
    axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatHistory/30/0?mobileNumber=${selectedChatNumber}&wabaNumber=${selectedWabaNumber}`)
      .then(response => {
        console.log(response.data.data)
        setChats(response.data.data.messages)
        setTotalPages(response.data.data.totalPagecount);
        setCurrentPage(prevState => prevState+1)
      })
      .catch(err => {
        console.log(err.message);
        throw new Error("Error fetching default chats");
      })
  }
  useEffect(() => {
    
    retrieveChats();
  },[selectedWabaNumber, selectedChatNumber,state])

  const fetchMoreChats = () => {
    console.log("Fetching...")
    axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatHistory/30/${currentPage}?mobileNumber=${selectedChatNumber}&wabaNumber=${selectedWabaNumber}`)
      .then(response => {
        const newChats = response.data.data.messages;
        console.log(newChats)
        setChats(chats.concat(newChats))
        setHasMore(currentPage+ 1 < totalPages)
        console.log(hasMore)
        setCurrentPage(prevPage => prevPage+1)
      })
      .catch(err => {
        console.log(err.message);
        throw new Error("Error fetching more chats");
      })
  }
  return (
    <div id="reverse-scrollable-div" className='chat-component'>
      <InfiniteScroll
        dataLength={chats.length}
        next={fetchMoreChats}
        style={{ display: "flex", flexDirection: "column-reverse" }} 
        inverse={true}
        hasMore={currentPage+ 1 < totalPages}
        loader={<h4>Loading...</h4>}
        scrollableTarget="reverse-scrollable-div"
      >

      { chats.map(chatItem => 
        <ChatComponent chatItem={chatItem}/>
      )}
      </InfiniteScroll>
    </div>
  )
}

export default Chats
