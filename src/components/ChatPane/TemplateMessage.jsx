import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const TemplateMessage = ({message}) => {
  return (
    <div className="template-message w-100">
        <div><FaEye/> Preview</div>
        <div className='d-flex justify-content-center'>
            <div className='message-box p-3 position-relative'>
                <p>
                {message}
                </p>
                <i className="position-absolute" style={{top: -7,left:-7}}><FaWhatsapp size={25} color='green'/></i>
            </div>
        </div>
    </div>
  )
}

export default TemplateMessage