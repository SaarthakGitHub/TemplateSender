import React from 'react'
import { Button } from 'react-bootstrap';

import { MdSend } from "react-icons/md";

const SendBar = ({selectedChatNumber, selectedWabaNumber, selectedTemplate}) => {
    let bodyArr = [];
    let headerArr =[];
    let buttonArr=[];
    let locationArr = [];
    let coupon = [];
    const handleClick = () => {
        console.log(selectedTemplate.buttonString)

        const inputs = document.getElementsByClassName('template-header-input');
        // console.log(typeof inputs)
        for(let i = 0 ; i< inputs.length ;i++){
            const inputName = inputs[i].name;
            if(inputName == 'HEADER') headerArr.push(inputs[i].value);
            if(inputName == 'BODY') bodyArr.push(inputs[i].value);
            if(inputName == 'DYNAMIC_URL') buttonArr.push(inputs[i].value);
            if(inputName == 'LOCATION') locationArr.push(inputs[i].value);
            if(inputName == 'COPY_CODE') coupon.push(inputs[i].value)
        }
        console.log("bodyArr = ", bodyArr )
        console.log("headerArr = ", headerArr )
        console.log("buttonArr = ", buttonArr )
        console.log("locationArr = ", locationArr )
        console.log("coupon = ", coupon)

        const payload = {
            "wabaNumber": selectedWabaNumber,
            "mobileNumber": selectedChatNumber,
            "templateName": selectedTemplate.templateName,
            "language": selectedTemplate.language,
            "bodyVar": bodyArr,
            "headerVar": headerArr,
            "buttonVar": buttonArr,
            "locationVar": locationArr,
            "coupon": coupon
        }
        console.log(JSON.stringify(payload))

        for(let i = 0 ; i< inputs.length ;i++){
            inputs[i].value = "";
        }

        bodyArr= [];
        headerArr=[];
        buttonArr=[];
        coupon = [];
        locationArr=[];
    }
  return (
    <div className="send-bar d-flex flex-row-reverse mr-5 py-1  ">
        <Button className='btn-sm' onClick={handleClick}>Send <MdSend/></Button>
    </div>
  )
}

export default SendBar