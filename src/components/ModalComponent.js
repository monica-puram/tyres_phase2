import React from 'react';
import ReactDOM from 'react-dom';
import '../css/signUp.css';
  
  class ModalComponent extends React.Component {
      constructor(props){
          super(props);
          this.el = document.createElement('div');
          this.el.className = "modalChild";
          this.modalRoot = document.getElementById('modal-root');
      }
      componentDidMount(){
        
          this.modalRoot.appendChild(this.el);
          
      }
      
      render(){
          
          return ReactDOM.createPortal(
              this.props.children,
              this.el,
            );
          }
      
    
  }

  export default ModalComponent;