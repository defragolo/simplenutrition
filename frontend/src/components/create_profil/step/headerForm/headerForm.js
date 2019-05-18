import React from 'react'
import { Alert } from 'reactstrap';

const Header_form = (props) => {
    
  return (
    <div>
       <h3>{props.title}</h3>
        {props.error1 ?
          <Alert color="danger">
            {props.error1}
          </Alert>
          : null}
        {props.error2 ?
          <Alert color="danger">
            {props.error2}
          </Alert>
          : null}
    </div>
  )
}

export default Header_form
