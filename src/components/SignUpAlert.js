import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../css/signUp.css';
import ModalCotent from './ModalContent';
import ModalContent from './ModalContent';

function SignUpAlert(props) {
    return (
      <div className = "modalParent">
          <ModalContent {...props}/>
          </div>
      
    );
  }

export default SignUpAlert;