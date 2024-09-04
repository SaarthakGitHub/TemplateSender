import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Nav } from 'react-bootstrap';
import TempList from './TemplateList/TempList';
// import TextTemplate from './TemplateList/TextTemplate';
// import AllTemplate from './TemplateList/AllTemplate';
// import ImageTemplate from './TemplateList/ImageTemplate';
// import DocumentTemplate from './TemplateList/DocumentTemplate';
// import VideoTemplate from './TemplateList/VideoTemplate';
// import NoneTemplate from './TemplateList/NoneTemplate';
// import LocationTemplate from './TemplateList/LocationTemplate';
import SearchList from './TemplateList/SearchList';

// Icons
import { FaFileAlt, FaStar  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdImage } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdClose } from "react-icons/md";


const CollapseBar = ({selectedWabaNumber, setOpen, setTemplateClick, setSelectedTemplate, selectedTemplate}) => {
    const [searchText, setSearchtext] = useState('');
    const [activeTab, setActiveTab] = useState('ALL')
    const handleSelect = (key) => {
        setActiveTab(key);
      };

      useEffect(() => {
        if(searchText == '') {
            return
        };
        const timeout = setTimeout(() => {
            setActiveTab("search");
        },1000);

        return () => clearTimeout(timeout);
      },[searchText])

  return (
    <div bg="light" className="collapse-div">
      <div className="d-flex align-items-center justify-content-between">
        <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="ALL">
              <strong>All</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="TEXT">
              <strong>T</strong>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="IMAGE">
              <MdImage />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="VIDEO">
              <MdMovie />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="DOCUMENT">
              <FaFileAlt />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='NONE'>
              <b>NONE</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="LOCATION">
              <FaLocationDot />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <input
          type="text"
          className="input-box-search"
          value={searchText}
          placeholder="Search template name"
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <a
          role="button"
          onClick={() => setOpen(false)}
          className="mx-3 text-danger"
        >
          <MdClose size={22} />
        </a>
      </div>
      <div id="rendering">
          { activeTab != 'search' && <TempList type={activeTab} selectedWabaNumber={selectedWabaNumber} setTemplateClick={setTemplateClick} setSelectedTemplate={setSelectedTemplate}/>}
          { activeTab== "search" && <SearchList selectedWabaNumber={selectedWabaNumber} searchText={searchText} setActiveTab={setActiveTab} setTemplateClick={setTemplateClick} setSelectedTemplate={setSelectedTemplate}/>}
      </div>
    </div>
  );
}

export default CollapseBar