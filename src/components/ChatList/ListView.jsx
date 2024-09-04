import React, {useState, useEffect} from "react";
import axios from 'axios';
import MiddlePaneTopBar from "./TopBar.jsx";
import PaginationBar from "./PaginationBar.jsx";
import ChatPane from "./ChatPane.jsx";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const MiddlePane = ({chats, setChats, setSelectedChat, selectedWabaNumber, setSelectedWabaNumber}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // const [selectedWabaNumber, setSelectedWabaNumber] = useState("");
  const [wabaGroups, setWabaGroups] = useState([]);
  const [wabaGroupName, setWabaGroupName] = useState('');
  const [wabaNumbers,setWabaNumbers] = useState([]);

  useEffect(() => {
      axios.get('https://dev.videostori.io/pivp/sysconfig/wabagroupname/findbyid/ALL')
        .then(result => {
          axios.get(`https://dev.videostori.io/pivp/sysconfig/wabanumberbygroupname/findbyid?wabaGroupName=${result.data.data[0]}&id=ALL`)
          .then(result => {
            console.log("Setted default waba number")
            setSelectedWabaNumber(result.data.data[0].wabaNumber)
            setCurrentPage(0)
            // console.log(selectedWabaNumber)
            axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/${currentPage}?wabaNumber=${result.data.data[0].wabaNumber}&searchText=All`)
            .then(result => {
                setTotalPages(result.data.data.totalPageCount)
                setSelectedChat({
                  receiver: result.data.data.results[0].userName,
                  contact : result.data.data.results[0].userNumber,
                  lastMessage: result.data.data.results[0].messageText
                })
                setChats(result.data.data.results);
            })
          })
        })
        .catch(err => {
            throw new Error("Error fetching default")
        })
      // eslint-disable-next-line
    },[])

  const retrieveWabaGroup = () => {
    axios.get('https://dev.videostori.io/pivp/sysconfig/wabagroupname/findbyid/ALL')
        .then(result => {
          // console.log(result.data.data); 
            setWabaGroups(result.data.data)
        })
        .catch(err => {
            throw new Error("Error fetching waba group")
        })
  }

useEffect(() => {
  retrieveWabaGroup();
  // eslint-disable-next-line
},[])

const retrieveWabaNumber = () => {
  if (!wabaGroupName) return;

  axios.get(`https://dev.videostori.io/pivp/sysconfig/wabanumberbygroupname/findbyid?wabaGroupName=${wabaGroupName}&id=ALL`)
      .then(result => {
          // console.log(result.data)
          setTotalPages(result.data.data.totalPageCount)
          setWabaNumbers(result.data.data);
      })
      // .then(()=> {console.log(wabaNumbers)})
      .catch(err => {
          console.log(err.message)
          throw new Error("Error fetching waba number")
      })
}

useEffect(() => {
  retrieveWabaNumber();
},[wabaGroupName])

const retrieveChats = () => {
  try{
    axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/0?wabaNumber=${selectedWabaNumber}&searchText=All`)
            .then(result => {
              setTotalPages(result.data.data.totalPageCount);
              setSelectedChat({
                receiver: result.data.data.results[0].userName,
                contact : result.data.data.results[0].userNumber,
                lastMessage: result.data.data.results[0].messageText
              })
                setChats(result.data.data.results);
            })
  }catch(err){
    console.log(err.message)
    throw new Error("Error fetching chats")
  }
}

useEffect(() => {
  if(selectedWabaNumber === '') return;
  setCurrentPage(0);
  setTotalPages(0);
  setChats([]);
  retrieveChats();
},[selectedWabaNumber])

  return (
    <div className="d-flex flex-column vh-100">
      <MiddlePaneTopBar wabaGroups={wabaGroups} setWabaGroupName={setWabaGroupName} selectedWabaNumber={selectedWabaNumber} setSelectedWabaNumber={setSelectedWabaNumber} wabaNumbers={wabaNumbers} setChats={setChats} currentPage={currentPage} setTotalPages={setTotalPages} />
      <ChatPane chats={chats} selectedWabaNumber={selectedWabaNumber} setChats={setChats} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} setSelectedChat={setSelectedChat}/>
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};
export default MiddlePane;
