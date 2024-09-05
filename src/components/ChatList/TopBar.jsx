import React,{useRef, useState, useEffect} from 'react';
import axios from 'axios';

import { FaSearch } from "react-icons/fa";
import FilterModal from './FilterModal';

const TopBar = ({wabaGroups, setWabaGroupName,selectedWabaNumber, setSelectedWabaNumber, wabaNumbers, setChats, currentPage, setTotalPages}) => {
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
      if(searchText ==='') return;
      const timeout = setTimeout(() => {
        axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/${currentPage}?wabaNumber=${selectedWabaNumber}&searchText=${searchText}`)
            .then(result => {
                setTotalPages(1)
                setChats(result.data.data.results);
            })
      }, 1000)

      return ()=> clearTimeout(timeout)
    },[searchText])

  return (
    <>
      <div className="middle-pane-top-bar justify-content-center d-flex flex-row align-items-center">
        <div className="search-container">
          <input type="text" className="search-input" value={searchText} placeholder="Search name or mobile number" onChange={(e) => setSearchText(e.target.value)}/>
        </div>

        <a
          aria-controls="example-collapse-text"
          className="mx-3"
          role="button"
        >
          <FilterModal wabaGroups={wabaGroups} setWabaGroupName={setWabaGroupName} setSelectedWabaNumber={setSelectedWabaNumber} wabaNumbers={wabaNumbers}/>

        </a>
      </div>
    </>
  );
}

export default TopBar