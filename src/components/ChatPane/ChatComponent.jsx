import React from 'react'
import './chat.css';
import { Row, Col } from 'react-bootstrap'

const ChatComponent = ({chatItem}) => {
  return chatItem.messageText !== "" && (
    // <div className={" box mx-3 my-3 h-25 d-flex " + (chatItem.messageDirection == 'OUTBOUND' ? 'flex-row' : 'flex-row-reverse')}>
    //         {chatItem.messageText}
    // </div>
    <div className='chat-card preview'>
           <div className="messsage-container" >
    <Row className={`mt-2 ${chatItem.messageDirection === "OUTBOUND" ? "received-chat" : "send-chat"}`}>
    <Col>
        <div className="msg">
            <p>
                {chatItem.messageText}
            </p>

            {/* <h6 className="text-secondry m-0 p-0 float-right small" style={{ fontSize: "10px" }}>{moment.unix(item?.messageTime).format('DD-MM-YYYY HH:mm:ss')}</h6> */}

        </div>
    </Col>
</Row>
</div></div>
  )
}

export default ChatComponent