import Select from 'components/Select'
import React from 'react'
import { Status } from './Styles'
import { useSelector } from 'react-redux'
import { SectionTitle } from '../Styles'


export default function TaskDetaiStatus({taskDetail, updateField,renderItem,renderItemStatusValue,genOptions }) {

    const arrStatus = useSelector((state) => state.task.arrStatus)
    
    
     
      const statusOptions = genOptions(arrStatus, 'statusId', 'statusName');  
      const renderStatus = renderItem(arrStatus, 'statusId', null, Status, 'statusName')  
      const renderStatusValue = renderItemStatusValue(arrStatus, 'statusId', null, Status, 'statusName')

    return (
        <div>
            <SectionTitle>Status</SectionTitle>
            <Select
                name="status"
                withClearValue={false}
                variant="empty"
                dropdownWidth={343}
                options={statusOptions}
                value={taskDetail.statusId}
                onChange={value => updateField('statusId', value)}
                renderOption={renderStatus}
                renderValue={renderStatusValue}
            />
        </div>
    )
}
