import React from 'react';
import { Navbar } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";

const ChatHeader = ({ selectedChatHeader }) => {
  return (
    <div className='chat-header'>
        <Navbar className="w-100 upper-bar bg-green">
  <div className="container-fluid">
       <ul className="navbar-nav me-auto d-flex flex-row mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="/"><IoIosArrowDown/></a>
        </li>
        
        <li className="nav-item">
            {/* eslint-disable-next-line */}
          <a className="nav-link text-light">{selectedChatHeader}</a>
        </li>
      </ul> 
  </div>
  </Navbar>
  </div>
  )
}

export default ChatHeader