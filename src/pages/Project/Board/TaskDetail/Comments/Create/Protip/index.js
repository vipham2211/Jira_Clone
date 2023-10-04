import React from 'react'
import { Tip, TipLetter } from './Styles'
import { KeyCodes } from 'constants/keyCode';
import { useEffect } from 'react';

export default function TaskDetailsCommentsCreateProTip({setFormOpen}) {

    const isFocusedElementEditable = () =>
    !!document.activeElement.getAttribute('contenteditable') ||
    ['TEXTAREA', 'INPUT'].includes(document.activeElement.tagName);

    useEffect(() => {
       
        const handleKeyDown = event => {
          if (!isFocusedElementEditable() && event.keyCode === KeyCodes.M) {
            event.preventDefault();
            setFormOpen(true);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [setFormOpen]);

  return (
    <Tip>
        <strong>Pro tip:</strong>press<TipLetter>M</TipLetter>to comment
  </Tip>
  )
}
