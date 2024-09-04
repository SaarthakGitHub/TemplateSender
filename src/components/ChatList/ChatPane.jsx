import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatItem from './ChatItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const ChatPane = ({ chats,selectedWabaNumber,setChats, currentPage, setCurrentPage, totalPages, setSelectedChat }) => {
//   const [counter, setCounter] = useState(1);
  const [hasMore, setHasMore] = useState(true);
//   const currentPage = 0;
//   const totalPages = 5;
//   const [currentPage, setCurrentPage] = useState(0);


  const style = {
    height: 60,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

//   const fetchMoreData = async () => {
//     console.log('Fetch User');
//     if (counter >= 10) {
//       setHasMore(false);
//     } else {
//       try {
//         const response = await axios.get(
//           `https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/20/$0?wabaNumber=${selectedWabaNumber}`
//         );
//         const newData = response.data.data.results;
//         setChats(chats.concat(newData));
//         setCounter((prevState) => prevState + 1);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setHasMore(false);
//       }
//     }
//   };



const fetchMoreData = () => {
    console.log("Calling fetch")
    const url = `https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/${currentPage}?wabaNumber=${selectedWabaNumber}&searchText=All`;
    
    axios
      .get(url)
      .then((response) => {
        console.log("Fetched")
          const newItems = response.data.data.results;
          console.log(response.data.data)
            setChats(chats.concat(newItems));
            setHasMore(currentPage + 1< totalPages);
            setCurrentPage(prevPage => prevPage+1);
            console.log("New page " , currentPage)
            
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

  return (
        <div id="scrollableDiv">
          <InfiniteScroll
            dataLength={chats.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {chats.map((chat, index) => (

            <ChatItem key={index} receiver={chat.userName} contact={chat.userNumber} lastMessage={chat.messageText} setSelectedChat={setSelectedChat}/>
            ))}
          </InfiniteScroll>
        </div>
  );
};

export default ChatPane;