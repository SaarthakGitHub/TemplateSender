import React, { useState, useEffect } from 'react'
import { FaFileAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import axios from 'axios';

const TempList = ({type,selectedWabaNumber, setTemplateClick, setSelectedTemplate, selectedTemplate}) => {
  const [items, setItems] = useState([]);
  const arr = []

  useEffect(() => {
    if(selectedWabaNumber == '') return
    axios.get(`https://dev.videostori.io/pivp/wappconfig/template/findbyheadertype?headerType=${type}&wabaNumber=${selectedWabaNumber}`)
      .then(response => {
        setItems(response.data.data)
      })

  },[type, selectedWabaNumber])

  return (
    <>
    { items && items.map(item => (
    <div className='d-flex h-10 mb-2 border-bottom border-3 template-list-item' 
    onClick={() => {
      setSelectedTemplate(item)
        setTemplateClick(true)
        }} 
        >
        <div className='px-3'>
        {type === 'ALL' && <strong>All</strong>}
        {type === 'TEXT' && <strong>T</strong>}
        {type === 'IMAGE' && <MdImage/>}
        {type === 'VIDEO' && <MdMovie/>}
        {type === 'DOCUMENT' && <FaFileAlt/>}
        {type === null && <strong>N</strong>}
        {type === 'NONE' && <strong>N</strong>}
        {type === 'LOCATION' && <FaLocationDot/>}
        {type === 'CAROUSEL' && <strong>C</strong>}
        </div>
        <div className='d-flex flex-column p-0' style={{verticalAlign: 'center'}}>
            <p className='mb-0'>{item.templateName}</p>
            <p className='mb-0 text-muted'>{item.bodymessage}</p>
        </div>
    </div>))
}
  </>
  )
}

export default TempList