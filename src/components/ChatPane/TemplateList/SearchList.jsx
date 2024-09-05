import React, { useState, useEffect} from 'react'
import { FaFileAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import axios from 'axios';

const SearchList = ({selectedWabaNumber, searchText, setActiveTab, setTemplateClick, setSelectedTemplate}) => {
    const [searchOutput, setSearchOutput] = useState([])


    useEffect(() => {
        if(searchText == '') return setActiveTab('all')
        axios.get(`https://dev.videostori.io/pivp/sysconfig/ChatHistory/findbyTemplateName?wabaNumber=${selectedWabaNumber}&templateName=${searchText}`)
            .then(response => {
                setSearchOutput(response.data.data)
            })
    },[searchText])

  return (
    <div className='h-100 scroll'>
        {
        searchOutput.length !== 0 && (
            searchOutput.map(items => {
                // console.log(items.headerType)
                return (
                    <div className='d-flex h-10 mb-2 border-bottom border-3 template-list-item' 
    onClick={() => {
      setSelectedTemplate(items)
        setTemplateClick(true)
        }} 
        >
        <div className='px-3'>
        {items.headerType === 'ALL' && <strong>All</strong>}
        {items.headerType === 'TEXT' && <strong>T</strong>}
        {items.headerType === 'IMAGE' && <MdImage/>}
        {items.headerType === 'VIDEO' && <MdMovie/>}
        {items.headerType === 'DOCUMENT' && <FaFileAlt/>}
        {items.headerType === null && <strong>N</strong>}
        {items.headerType === 'LOCATION' && <FaLocationDot/>}
        {items.headerType === 'CAROUSEL' && <strong>C</strong>}
        </div>
        <div className='d-flex flex-column p-0' style={{verticalAlign: 'center'}}>
            <p className='mb-0'>{items.templateName}</p>
            <p className='mb-0 text-muted'>{items.bodymessage}</p>
        </div>
    </div>
                )
            })
        )
        }
    </div>
  )
}

export default SearchList