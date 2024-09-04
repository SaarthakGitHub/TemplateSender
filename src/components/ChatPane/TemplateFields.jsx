import React from 'react'

import { Nav } from 'react-bootstrap'

const TemplateFields = ({templateHeaders}) => {
    

  return (
    templateHeaders.length > 0 &&
    <div className="template-header">
        {
        templateHeaders.map((temp, index) => (
            <>
            <label htmlFor={`input-${index}`}><b>&#123;&#123;{index+1}&#125;&#125;
            </b>
            </label>
            <input id={`input-${index}`} type='text'className='mx-2 template-header-input' name={temp.componentType} placeholder='value'/>
            </>
        ))
    }
    </div>
  );
}

export default TemplateFields