import React, { useState } from 'react';


import Button from './Button';


const CopyLinkButton = ({ ...buttonProps }) => {
  const [isLinkCopied, setLinkCopied] = useState(false);

  const copyToClipboard = value => {
    navigator.clipboard.writeText(value).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  const handleLinkCopy = () => {
    copyToClipboard(window.location.href);
  };

  return (
    <Button icon="link" onClick={handleLinkCopy} {...buttonProps}>
      {isLinkCopied ? 'Link Copied' : 'Copy link'}
    </Button>
  );
};

export default CopyLinkButton;