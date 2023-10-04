import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorCont } from './Styles';

export default function TextEditor(props) {
  


  const  modulesConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
    ],
  }
 
const handleChange = (value)=>{
 
  props.onChange(value)
}
  return (
    <EditorCont >
         <ReactQuill theme="snow" modules={modulesConfig} value={props.value} onChange={handleChange}   style={{ height: props.height }}  />
    </EditorCont>
   
        
 
  )
}

