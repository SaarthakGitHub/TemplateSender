import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

import { MdSend } from "react-icons/md";
import WappAPI from '../../WappAPI';

const SendBar = ({selectedChatNumber, selectedWabaNumber, selectedTemplate, setState, setOpen, setTemplateClick}) => {
    let bodyArr = [];
    let headerArr =[];
    let buttonArr=[];
    let locationArr = [];
    const handleClick = () => {
        // console.log(selectedTemplate.buttonString)

        const inputs = document.getElementsByClassName('template-header-input');
        // console.log(typeof inputs)
        for(let i = 0 ; i< inputs.length ;i++){
            const inputName = inputs[i].name;
            if(inputName == 'HEADER') headerArr.push(inputs[i].value);
            if(inputName == 'BODY') bodyArr.push(inputs[i].value);
            if(inputName == 'DYNAMIC_URL') buttonArr.push(inputs[i].value);
            if(inputName == 'LOCATION') locationArr.push(inputs[i].value);
            if(inputName == 'COPY_CODE') buttonArr.push(inputs[i].value)
        }
        // console.log("bodyArr = ", bodyArr )
        // console.log("headerArr = ", headerArr )
        // console.log("buttonArr = ", buttonArr )
        // console.log("locationArr = ", locationArr )

        const payload = {
            "wabaNumber": selectedWabaNumber,
            "mobileNumber": selectedChatNumber,
            "templateName": selectedTemplate.templateName,
            "language": selectedTemplate.language,
            "bodyVar": bodyArr,
            "headerVar": headerArr,
            "buttonVar": buttonArr,
            "locationVar": locationArr,
        }
        // console.log(JSON.stringify(payload))
        // axios.post('https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/sendTemplateMsg', payload)
        WappAPI.sendTemplate(payload)
            .then(response => {
                // console.log(response.data.data)
            })
            .then(() => {
                for(let i = 0 ; i< inputs.length ;i++){
                    inputs[i].value = "";
                }
        
                bodyArr= [];
                headerArr=[];
                buttonArr=[];
                locationArr=[];
        
                // retrieveChats()
                setOpen(false)
                setTemplateClick(false)
                // console.log("false")
                setState('changed')
            })

        // for(let i = 0 ; i< inputs.length ;i++){
        //     inputs[i].value = "";
        // }

        // bodyArr= [];
        // headerArr=[];
        // buttonArr=[];
        // locationArr=[];

        // // retrieveChats()
        // setOpen(false)
        // setTemplateClick(false)
        // console.log("false")
        // setState('changed')
    }
  return (
    <div className="send-bar d-flex flex-row-reverse mr-5 py-1  ">
        <Button className='btn-md' onClick={handleClick}>Send <MdSend/></Button>
    </div>
  )
}

export default SendBar