import Form from 'components/Form'
import React, { useEffect, useRef } from 'react'
import { Content, Left, FormElement, FormHeading, Right, SelectItem, SelectItemLabel, ActionButton, Actions, Status, TrackingLink, TimeTracking, SectionTitle } from './Styles'
import TaskTypeIcon from 'components/TaskTypeIcon';
import Avatar from 'components/Avatar';
import TaskPriorityIcon from 'components/TaskPriorityIcon';
import { taskStatus } from 'utils/Styles';
import Icon from 'components/Icon';
import { useState } from 'react';
import Modal from 'components/Modal';
import TrackingModal from './TrackingModal';
import TrackingWidget from 'components/TrackingWidget';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskAction } from 'redux/action/taskAction';
import { taskCreateModalAction, timeTrackingModalAction } from 'redux/action/modalAction';




export default function ProjectIssueCreate(props) {

  const dispatch=useDispatch()

  const isSpinnerLoading = useSelector((state)=> state.spinner.isSpinnerLoading)
  const timeTrackingModal = useSelector(state=> state.modal.timeTrackingModal)


  const [timeSpent, setTimeSpent] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [estimate, setEstimate] = useState(0)
 

  const $spentTimeRef = useRef(0)
  const $timeRemainingRef = useRef(0)
  const $estimateRef = useRef(0)


 
  useEffect(() => {
    setTimeSpent($spentTimeRef.current.value)
    setTimeRemaining($timeRemainingRef.current.value)
  }, [$spentTimeRef, $timeRemainingRef])

 

  const initialValues = {
    typeId: 2,
    taskName: '',
    description: '',
    listUserAsign: [],
    statusId: '1',
    projectId: null,
    originalEstimate: 0,
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
    priorityId: 2,
  }
  const CreateTaskSchema = Yup.object().shape({
    taskName: Yup.string() 
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Task Name is required'), 
    typeId: Yup.string() 
    .required('Task Type is required'), 
    priorityId:Yup.string() 
    .required('Priority is required'), 
    originalEstimate: Yup.number().required('Original Estimate is required'),
    projectId:Yup.number().required('Project is required'),
 
  });

  const handleSubmit = (values) => {
    const task =  {
     ...values
    }
   
    dispatch(createTaskAction(task))
     
  };

  const renderItem = (items, itemKey, IconComponent, LabelComponent, labelKey, iconSize = 18, iconTop = 1) => ({ value: id }) => {
    const item = items.find(item => item[itemKey] === id)

    if (item) {
      return (
        <SelectItem key={item[itemKey]}>
          {IconComponent && <IconComponent type={item[itemKey]} size={iconSize} top={iconTop} avatarUrl={item.avatar ? item.avatar : null} />}
          <LabelComponent color={itemKey === 'statusId' ? taskStatus[item.statusId] : null}>
            {item[labelKey]}
         
          </LabelComponent>
          
        </SelectItem>
      )
    }
  }
  const renderItemStatusValue = (items, itemKey, IconComponent, LabelComponent, labelKey, iconSize = 18, iconTop = 1) => ({ value: id }) => {
    const item = items.find(item => item[itemKey] === id)

    if (item) {
      return (
        <SelectItem key={item[itemKey]}>
          {IconComponent && <IconComponent type={item[itemKey]} size={iconSize} top={iconTop} avatarUrl={item.avatar ? item.avatar : null} />}
          <LabelComponent color={itemKey === 'statusId' ? taskStatus[item.statusId] : null}>
            {item[labelKey]}
            {itemKey === 'statusId' && <Icon type="chevron-down" size={18} />}  
          </LabelComponent>
          
        </SelectItem>
      )
    }
  }
  

  const genOptions = (arr, valueField, labelField) => {
    
    if(arr.length>0){
      return arr.map(item => ({ value: item[valueField], label: item[labelField] }));
    }
    else{
      return []
    }
      
    
   
  };

  const userOptions = genOptions(props.arrUsersByProjectId, 'userId', 'name');
  const taskTypeOptions = genOptions(props.arrTaskType, 'id', 'taskType');
  const priorityOptions = genOptions(props.arrPriority, 'priorityId', 'priority');
  const statusOptions = genOptions(props.arrStatus, 'statusId', 'statusName');
  const projectOptions = genOptions(props.arrProject,'id','projectName')
 
  const renderType = renderItem(props.arrTaskType, 'id', TaskTypeIcon, SelectItemLabel, 'taskType')
  const renderPriority = renderItem(props.arrPriority, 'priorityId', TaskPriorityIcon, SelectItemLabel, 'priority')
  const renderUser = renderItem(props.arrUsersByProjectId, 'userId', Avatar, SelectItemLabel, 'name', 20)
  const renderStatus = renderItem(props.arrStatus, 'statusId', null, Status, 'statusName')
  const renderStatusValue = renderItemStatusValue(props.arrStatus, 'statusId', null, Status, 'statusName')
  const renderProject=renderItem(props.arrProject,'id',null,SelectItemLabel,'projectName')



  return (
    <Form
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CreateTaskSchema}
      
    >
      
      <FormElement>
        <FormHeading>Create issue</FormHeading>
        <Content>
          <Left>
          <Form.Field
              name="projectId"
              label="Project"
              type='select'
              variant='normal'
              options={projectOptions}
              renderOption={renderProject}
              renderValue={renderProject}
             
             
          />
            <Form.Field
              name="taskName"
              label="Task Name"
              tip="Concisely summarize the task name  in one or two sentences."
            />
            <Form.Field
              name="typeId"
              label="Issue Type"
              tip="Start typing to get a list of possible matches."
              type='select'
              variant='normal'
              options={taskTypeOptions}
              renderOption={renderType}
              renderValue={renderType}
            />
            <Form.Field
              isMulti
              name="listUserAsign"
              label="Assignees"
              tip="Start typing to get a list of possible matches."
              type='select'
              variant='normal'
              options={userOptions}
              renderOption={renderUser}
              renderValue={renderUser}
             
            
            />

          </Left>
          <Right>
            <Form.Field
              name="statusId"
              label="Status"
              variant="empty"
              dropdownWidth={252}
              withClearValue={false}
              type='select'
              options={statusOptions}
              renderOption={renderStatus}
              renderValue={renderStatusValue}
            />
            <Form.Field
              name="priorityId"
              label="Priority"
              tip="Priority in relation to other issues."
              type="select"
              variant='normal'
              options={priorityOptions}
              renderOption={renderPriority}
              renderValue={renderPriority}
            />
            <Form.Field
              name="originalEstimate"
              label="Original Estimate"
              filter={/^\d{0,6}$/}
              $ref={$estimateRef}
              isNumberValue
              debounce
              setValueState={setEstimate}
            />
            <TimeTracking>
              <SectionTitle>Time Tracking</SectionTitle>
              <TrackingLink onClick={() => dispatch(timeTrackingModalAction(true))}>
                <TrackingWidget timeSpent={timeSpent} timeRemaining={timeRemaining} estimate={estimate} />
              </TrackingLink>
            </TimeTracking>

            {timeTrackingModal && <Modal  onClose={timeTrackingModalAction} width={400} renderContent={() =>
              <TrackingModal
               
                timeSpent={timeSpent}
                timeRemaining={timeRemaining}
                estimate={estimate}
                $spentTimeRef={$spentTimeRef}
                $timeRemainingRef={$timeRemainingRef}
                setTimeRemaining={setTimeRemaining}
                setTimeSpent={setTimeSpent}

              />} />}
          </Right>
        </Content>
        <Form.Field
          name="description"
          label="Description"
          tip="Describe the issue in as much detail as you'd like."
          type='textEditor'
        />
        <Actions>
          <ActionButton type="submit" variant="primary" isLoading={isSpinnerLoading}    >
            Create Issue
          </ActionButton>
          <ActionButton type="button" variant="empty" onClick={()=> dispatch(taskCreateModalAction(false))}   >
            Cancel
          </ActionButton>
        </Actions>
      </FormElement>
    </Form>
  )
}










