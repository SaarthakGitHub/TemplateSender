import React, { useEffect, useState } from 'react'
import { Form, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';

const ChatFilter = ({wabaGroups, setWabaGroupName, setNewWabaNumber, wabaNumbers, setSelectedChat}) => {

    const handleClickWabaGroup = (e) => {
        setWabaGroupName(e);
    }


    const handleClickWabaNumber = (wabaNumber) => {
        setNewWabaNumber(wabaNumber)
    }


  return (
    <Form className="form-controls">
      <DropdownButton
        id="waba-group-selection"
        title="Select WABA Group"
        onSelect={handleClickWabaGroup}
      >
        {wabaGroups && wabaGroups.map((wabaGroup,index) => (
          <Dropdown.Item key={index} eventKey={wabaGroup}>
            {wabaGroup}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <DropdownButton id="waba-group-selection" title="Select WABA Number" onSelect={handleClickWabaNumber}>
        {wabaNumbers &&
          wabaNumbers.map((wabaNumber,index) => (
            <Dropdown.Item key={index} eventKey={wabaNumber.wabaNumber}>
              {wabaNumber.wabaNumber}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </Form>
  );
}

export default ChatFilter