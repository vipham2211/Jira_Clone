import React, { useRef}  from 'react'
import ReactDOM from 'react-dom';
import { StylesModal, ModalOverlay, CloseIcon } from './Style'
import useClickOutside from 'components/useClickOutside';
import { useDispatch } from 'react-redux';




export default function Modal(props) {

    const { variant = 'center',isCloseIcon=true } = props
 
    const $root = document.getElementById('root');
    const dispatch=useDispatch()
    const $modalRef = useRef(); 
    const $overlayRef = useRef();

    useClickOutside($modalRef, () => { dispatch(props.onClose(false))}, $overlayRef, props.navigate);

      

    return (ReactDOM.createPortal(
        <ModalOverlay variant={variant} ref={$overlayRef}>
          <StylesModal ref={$modalRef}  data-testid={props.testid} variant={variant} width={props.width}>
          {isCloseIcon && 
          <CloseIcon
          variant={variant}
          type="close"
          onClick={() => {
            dispatch(props.onClose(false))
           
          }}
        />
          }  
            
            {props.renderContent()}
          </StylesModal>
        </ModalOverlay>,
       $root
      ))
}


