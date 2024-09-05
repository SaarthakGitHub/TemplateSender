import React, {useState} from 'react'

import { Modal, Button } from 'react-bootstrap';

import { IoFilterSharp } from "react-icons/io5";
import ChatFilter from './ChatFilter';

const FilterModal = ({wabaGroups, setWabaGroupName, setSelectedWabaNumber, wabaNumbers}) => {
    const [show, setShow] = useState(false);
    const [newWabaNumber, setNewWabaNumber] = useState('');

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true);
    }
    const handleSubmitClick = () => {
        setSelectedWabaNumber(newWabaNumber)
        setShow(false)
    }

  return (
    <div>
        <a className='modal-button' variant="primary" onClick={handleShow} role='button' >
        <IoFilterSharp size={25} />
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}    
      >
        <Modal.Header>
          <Modal.Title>Set Waba Group and Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ChatFilter wabaGroups={wabaGroups} setWabaGroupName={setWabaGroupName} setNewWabaNumber={setNewWabaNumber} wabaNumbers={wabaNumbers}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitClick}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FilterModal