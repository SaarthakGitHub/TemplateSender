import React, { useEffect, useState } from 'react';
import TemplateFields from './TemplateFields';
import TemplateMessage from './TemplateMessage';
import SendBar from './SendBar';
// import axios from 'axios';

import { Row, Col, Container} from 'react-bootstrap';

const TemplatePreview = ({selectedTemplate, selectedChatNumber, selectedWabaNumber, setState, setOpen, setTemplateClick}) => {
    const [templateHeaders, setTemplateHeaders] = useState(0);
    const [templateMessage, setTemplateMessage] = useState('')
    useEffect(() => {
        console.log(selectedTemplate.buttonString)
        setTemplateHeaders(selectedTemplate.variables);
        setTemplateMessage(selectedTemplate.bodymessage)
    },[selectedTemplate])
  return (
    <div className="ml-3 template-view">
      <Container>
        <Row>
          <TemplateFields templateHeaders={templateHeaders} />
        </Row>
        <Row>
          <TemplateMessage message={templateMessage} />
        </Row>
        {/* <Row> */}
        </Container>
          <SendBar
            selectedChatNumber={selectedChatNumber}
            selectedWabaNumber={selectedWabaNumber}
            selectedTemplate={selectedTemplate}
            setState={setState}
            setOpen={setOpen}
            setTemplateClick={setTemplateClick}
          />
        {/* </Row> */}
        {/* <TemplateFields templateHeaders={templateHeaders}/> */}
        {/* <TemplateMessage message={templateMessage}/> */}
        {/* <SendBar selectedChatNumber={selectedChatNumber} selectedWabaNumber={selectedWabaNumber} selectedTemplate={selectedTemplate} setState={setState} setOpen={setOpen} setTemplateClick={setTemplateClick}/> */}
      {/* </Container> */}
    </div>
  );
}

export default TemplatePreview