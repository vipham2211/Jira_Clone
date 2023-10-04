import React, { Fragment, useEffect, useState } from 'react';
import { SectionTitle } from '../Styles';
import InputDebounce from 'components/InputDebounce';
import TrackingWidget from 'components/TrackingWidget';
import Modal from 'components/Modal';
import Button from 'components/Button';
import { Actions, InputCont, InputLabel, Inputs, ModalContents, ModalTitle, TrackingLink } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { timeTrackingModalAction } from 'redux/action/modalAction';

export default function TaskDetailEstimateTracking({ updateField, taskDetail }) {

   const timeTrackingModal = useSelector(state=> state.modal.timeTrackingModal)
   
   const [originalEstimate,setoriginalEstimate] = useState(0)
   const [timeTrackingSpent, setTimeTrackingSpent] = useState(0); 
   const [timeTrackingRemaining, setTimeTrackingRemaining] = useState(0); 

    const dispatch=useDispatch()

 useEffect(()=>{
    setoriginalEstimate(taskDetail.originalEstimate ||0)
    setTimeTrackingSpent(taskDetail.timeTrackingSpent ||0)
    setTimeTrackingRemaining(taskDetail.timeTrackingRemaining || 0)
 },[taskDetail])


   return (
       <Fragment>
           <SectionTitle>Original Estimate</SectionTitle>
           <InputDebounce
               name="originalEstimate"
               label="Original Estimate"
               value={originalEstimate}
               onChange={(value) => updateField('originalEstimate', value)}
               filter={/^\d{0,6}$/}
               isNumberValue
           />

           <SectionTitle>Time Tracking</SectionTitle>
           <TrackingLink onClick={() => dispatch(timeTrackingModalAction(true))}>
               <TrackingWidget timeSpent={taskDetail.timeTrackingSpent} timeRemaining={taskDetail.timeTrackingRemaining} estimate={taskDetail.originalEstimate} />
           </TrackingLink>
           {timeTrackingModal && (
               <Modal onClose={timeTrackingModalAction} width={400} renderContent={() => (
                   <ModalContents>
                       <ModalTitle>Time tracking</ModalTitle>
                       <TrackingWidget timeSpent={taskDetail.timeTrackingSpent} timeRemaining={taskDetail.timeTrackingRemaining} estimate={taskDetail.originalEstimate} />
                       <Inputs>
                           <InputCont>
                               <InputLabel>Time spent (hours)</InputLabel>
                               <InputDebounce
                                   name="timeTrackingSpent"
                                   label="Time spent (hours)"
                                   value={timeTrackingSpent}
                                   onChange={(value) =>  updateField('timeTrackingSpent', value)}
                                   filter={/^\d{0,6}$/}
                                   isNumberValue
                               />
                           </InputCont>
                           <InputCont>
                               <InputLabel>Time remaining (hours)</InputLabel>
                               <InputDebounce
                                   name="timeTrackingRemaining"
                                   label="Time remaining (hours)"
                                   value={timeTrackingRemaining}
                                   onChange={(value) => updateField('timeTrackingRemaining', value)}
                                   filter={/^\d{0,6}$/}
                                   isNumberValue
                               />
                           </InputCont>
                       </Inputs>
                       <Actions>
                           <Button variant="primary" onClick={() => dispatch(timeTrackingModalAction(false))}> Done </Button>
                       </Actions>
                   </ModalContents>
               )}
               />
           )}
       </Fragment>
   );
}
