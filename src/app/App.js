import React, { Fragment } from 'react';
import {  RouterProvider } from 'react-router-dom';
import router from 'router';
import BaseStyle from './BaseStyle';
import './FontStyle.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {


 
  return (
    <Fragment>
        
          <BaseStyle />         
          <RouterProvider router={router} />
          <ToastContainer />
    </Fragment>
    
 
  );
}

export default App;
