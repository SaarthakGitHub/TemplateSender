import React,{useState, useEffect} from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { Button, Navbar,Nav, Collapse } from 'react-bootstrap';
import CollapseBar from './CollapseBar';

import { MdArrowBack } from "react-icons/md";
import { MdClose } from "react-icons/md";
import TemplatePreview from './TemplatePreview';

const TemplateBar = ({selectedWabaNumber, selectedChatNumber}) => {
  const [open,setOpen] = useState(false)
  const [templateClick, setTemplateClick] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState({});

  const style={
    display: open ? 'none' : 'block'
  }
  // console.log(style)
  return templateClick ? (
    <div className='template-preview'>
      <div className="d-flex justify-content-between align-items-center">
          <a role='button' className='template-preview-back-button ml-2' onClick={() => {
            setTemplateClick(false)
            setOpen(true)
          }}>
            <MdArrowBack size={25}/>
          </a>
          <a role="button" className='mr-2' onClick={() =>{
            setTemplateClick(false)
          setOpen(false)}}><MdClose size={22} color='red'/></a>
          </div>
      <TemplatePreview selectedTemplate={selectedTemplate} selectedChatNumber={selectedChatNumber} selectedWabaNumber={selectedWabaNumber}/>
    </div>
  ) : (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text" className="bg-light">
          <CollapseBar
            selectedWabaNumber={selectedWabaNumber}
            setOpen={setOpen}
            setTemplateClick={setTemplateClick}
            setSelectedTemplate={setSelectedTemplate}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </Collapse>
      <div className="template-bar" style={style}>
        <Navbar
          className="d-flex justify-content-center w-100 h-100"
          bg="light"
        >
          <Button
            variant="outline-success"
            className="rounded-pill"
            onClick={() => {
              setOpen(true);
              setTemplateClick(false);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <AiFillThunderbolt />
            Send Template
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default TemplateBar