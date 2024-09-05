import axios from 'axios';

const getAllWabaGroup = () => {
    return axios.get('https://dev.videostori.io/pivp/sysconfig/wabagroupname/findbyid/ALL')
}

const getAllWabaNumberByGroup = (wabaGroup) => {
    return axios.get(`https://dev.videostori.io/pivp/sysconfig/wabanumberbygroupname/findbyid?wabaGroupName=${wabaGroup}&id=ALL`)
}

const getAllChatsNumberByWabaNumber = (page,wabaNumber) => {
    return axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/${page}?wabaNumber=${wabaNumber}&searchText=All`)
}

const searchChatByText = (page, wabaNumber, searchText) => {
    return axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatNumber/10/${page}?wabaNumber=${wabaNumber}&searchText=${searchText}`)
}

const getChatsByMobileNumber = (page,mobileNumber,wabaNumber) => {
    return axios.get(`https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/chatHistory/30/${page}?mobileNumber=${mobileNumber}&wabaNumber=${wabaNumber}`)
}

const getTemplateByHeaderType = (type, wabaNumber) => {
    return axios.get(`https://dev.videostori.io/pivp/wappconfig/template/findbyheadertype?headerType=${type}&wabaNumber=${wabaNumber}`)
}

const getTemplateByTemplateName = (wabaNumber, templateName) => {
    return axios.get(`https://dev.videostori.io/pivp/sysconfig/ChatHistory/findbyTemplateName?wabaNumber=${wabaNumber}&templateName=${templateName}`)
}

const sendTemplate = (payload) => {
    return axios.post('https://dev.videostori.io/pivp/sysconfig/whatsappchatresponse/sendTemplateMsg', payload)
}

const WappAPI = {
    getAllWabaGroup,
    getAllWabaNumberByGroup,
    getAllChatsNumberByWabaNumber,
    searchChatByText,
    getChatsByMobileNumber,
    getTemplateByHeaderType,
    getTemplateByTemplateName,
    sendTemplate
};

export default WappAPI;