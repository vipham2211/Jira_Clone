import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useClickOutside(ref, onClickOutside,$listeningElementRef,navi) {

  const navigate=useNavigate()
  
  useEffect(() => {
    const $listeningElement = ($listeningElementRef || {}).current || document;

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && !navi  ) {
        onClickOutside();
        
      }
      if (ref.current && !ref.current.contains(event.target) && navi   ) {
        navigate(-1)
      }
    }
    $listeningElement.addEventListener("mousedown", handleClickOutside);
    return () => {
    $listeningElement.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside, $listeningElementRef,navi,navigate]);
}