import React, { useEffect, useState } from 'react';
import TemplateFields from './TemplateFields';
import TemplateMessage from './TemplateMessage';
import SendBar from './SendBar';
// import axios from 'axios';

const TemplatePreview = ({selectedTemplate, selectedChatNumber, selectedWabaNumber}) => {
    const [templateHeaders, setTemplateHeaders] = useState(0);
    const [templateMessage, setTemplateMessage] = useState('')
    useEffect(() => {
        console.log(selectedTemplate)
        setTemplateHeaders(selectedTemplate.variables);
        setTemplateMessage(selectedTemplate.bodymessage)
    },[selectedTemplate])
  return (
    <div className='ml-3 template-view'>
    <TemplateFields templateHeaders={templateHeaders}/>
    <TemplateMessage message={templateMessage}/>
    <SendBar selectedChatNumber={selectedChatNumber} selectedWabaNumber={selectedWabaNumber} selectedTemplate={selectedTemplate}/>
    </div>
  )
}

export default TemplatePreview