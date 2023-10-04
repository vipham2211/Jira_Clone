import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ChildrenWrapper, CloseIcon, TooltipContent, TooltipWrapper } from './Styles';
import useClickOutside from 'components/useClickOutside';


const Tooltip = ({ children, type='hover',renderContent,placement, ...props }) => {

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [toolTipRef,setTooltipRef]= useState(0)
  const [childrenRef,setChildrenRef]= useState(0)

  const $root = document.getElementById('root');

  const $wrapperRef = useRef();
  const $tooltipRef = useRef();
  const $refChildren = useRef()

  useEffect(() => {
    const computePosition = () => {
      const { top, left, height,width } = $wrapperRef.current.getBoundingClientRect();
      calcPotition(placement,top,left,height,width)
    };
    if (visible) {
      computePosition();
      window.addEventListener('resize', computePosition);
      window.addEventListener('scroll', computePosition);
    }
    return () => {
      window.removeEventListener('resize', computePosition);
      window.removeEventListener('scroll', computePosition);
    };
  }, [visible,placement]);

 

 const calcPotition = (placement,top,left,height,width)=>{
  
    const margin=  7;
    const tooltipRect = $tooltipRef.current.getBoundingClientRect()
    const childrenRect = $refChildren.current.getBoundingClientRect()
    setTooltipRef(tooltipRect)
    setChildrenRef(childrenRect)
    const childrenCenterX = childrenRect.left + childrenRect.width / 2;
    const childrenRectCenterY = childrenRect.top + childrenRect.height / 2;
    
  switch(placement) {
    case 'top':
      setPosition({ top:  childrenRect.top - margin - tooltipRect.height, left: childrenCenterX-(tooltipRect.width/2)});
      break;
    case 'left':
      setPosition({ top: top-(height/2) , left: left + window.pageXOffset+width });
      break;
    case'right':
    setPosition({ top:  childrenRectCenterY- childrenRect.height/2, left: childrenRect.right + margin});
    break;
    default :setPosition({ top: top + height, left: left })
     break;
  }

 }

  const handleMouseOver = () => {
    setVisible(true);
  };
  const handleMouseOut = () => {
    setVisible(false);
  };
 const handleClick = ()=>{
    setVisible(true)
 }
 
 useClickOutside($tooltipRef, setVisible);

  const tooltipContent = (
    <TooltipContent visible={visible} top={position.top} left={position.left } toolTip={toolTipRef} type={type} childrenRef={childrenRef}   placement={placement}  ref={$tooltipRef} >
    {type==='click' &&  <CloseIcon  type='close' onClick={()=>{ setVisible(false) }}  />}
    { useMemo(()=>renderContent(),[renderContent])  }
    </TooltipContent>
  );


  return (
    <>
     {type ==='hover' ?
    <TooltipWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  ref={$wrapperRef} {...props}>
          <ChildrenWrapper ref={$refChildren}>
            {children}
          </ChildrenWrapper>
            {visible  && ReactDOM.createPortal(tooltipContent, $root)}
       
    </TooltipWrapper>
    :
    <TooltipWrapper   ref={$wrapperRef} {...props}>
          <ChildrenWrapper ref={$refChildren} onClick={handleClick}>
            {children}
          </ChildrenWrapper>
            {visible  && ReactDOM.createPortal(tooltipContent, $root)}
       
    </TooltipWrapper>
  }
    </>
   
  );
};

export default Tooltip;