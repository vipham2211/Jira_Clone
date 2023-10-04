import React, { useEffect, useState } from 'react'
import { Content, Left, Right, SelectItem, StyledTaskDetail, TopActions, TopActionsRight } from './Styles'
import Type from './Type'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  updateTaskDetailAction } from 'redux/action/taskAction'
import { useSelector } from 'react-redux'
import Button from 'components/Button'
import Delete from './Delete'
import Title from './Title'
import Description from './Description'
import Status from './Status'
import CopyLinkButton from 'components/CopyLinkButton'
import Icon from 'components/Icon'
import { taskStatus } from 'utils/Styles';
import Assignees from './AssigneesReporter'
import Priority from './Priority'
import EstimateTracking from './EstimateTracking'
import Comments from './Comments'
import PageLoader from 'components/PageLoader'

export default function TaskDetail() {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const taskDetail = useSelector(state => state.task.arrTaskDetail)
  const {members}= useSelector(state => state.project.arrProjectDetail)
  
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 200)
  }, [])
 

  const updateField = (field, value) => {

    const requestData = {
      ...taskDetail,
      [field]: value
    }

    dispatch(updateTaskDetailAction(requestData))

  }

  const renderItem = (items=[], itemKey, IconComponent, LabelComponent, labelKey, iconSize = 18, iconTop = 1) => ({ value: id }) => {
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
    if (arr) {
      return arr.map(item => ({ value: item[valueField], label: item[labelField] }));
    } 
    return [];
  };

  

  return (
    <StyledTaskDetail >
      {loading && <PageLoader/>}
      <TopActions>
        <Type taskDetail={taskDetail} updateField={updateField} genOptions={genOptions} renderItem={renderItem} />
        <TopActionsRight>
          <Button icon="feedback" variant="empty" >
            Give feedback
          </Button>
          <CopyLinkButton variant="empty" />
          <Delete taskDetail={taskDetail} />
          <Button icon="close" iconSize={24} variant="empty" onClick={() => navigate(-1)} />
        </TopActionsRight>
      </TopActions>
      <Content>
        <Left>
          <Title taskDetail={taskDetail} updateField={updateField} />
          <Description taskDetail={taskDetail} updateField={updateField} />
          <Comments taskDetail={taskDetail} />
        </Left>
        <Right>
          <Status renderItem={renderItem} renderItemStatusValue={renderItemStatusValue} genOptions={genOptions} taskDetail={taskDetail} updateField={updateField} />
          <Assignees taskDetail={taskDetail} genOptions={genOptions} renderItem={renderItem} members={members} updateField={updateField}/>
          <Priority taskDetail={taskDetail} genOptions={genOptions} renderItem={renderItem}  updateField={updateField} />
          <EstimateTracking taskDetail={taskDetail} updateField={updateField}/>
        </Right>
      </Content >
    </StyledTaskDetail>
  )
}
