import React, { useState } from 'react';


import Button from './Button';


const CopyLinkButton = ({ ...buttonProps }) => {
  const [isLinkCopied, setLinkCopied] = useState(false);

  const copyToClipboard = value => {
    const $textarea = document.createElement('textarea');
    $textarea.value = value;
    document.body.appendChild($textarea);
    $textarea.select();
  
    document.body.removeChild($textarea);
  };
  
  const handleLinkCopy = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
    copyToClipboard(window.location.href);
  };

  return (
    <Button icon="link" onClick={handleLinkCopy} {...buttonProps}>
      {isLinkCopied ? 'Link Copied' : 'Copy link'}
    </Button>
  );
};

export default CopyLinkButton;