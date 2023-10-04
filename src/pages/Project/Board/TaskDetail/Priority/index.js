import React, { Fragment } from 'react'
import { SectionTitle } from '../Styles'
import { useSelector } from 'react-redux'
import Select from 'components/Select'
import TaskPriorityIcon from 'components/TaskPriorityIcon';
import { SelectItemLabel } from '../Styles';
export default function TaskDetailPriority({taskDetail,updateField,genOptions,renderItem}) {

    const arrPriority = useSelector((state) => state.task.arrPriority)

    const priorityOptions = genOptions(arrPriority, 'priorityId', 'priority');
    const renderPriority = renderItem(arrPriority, 'priorityId', TaskPriorityIcon, SelectItemLabel, 'priority')

    return (
        <Fragment>

            <SectionTitle> Priority </SectionTitle>
            <Select
                name="priority"
                label="priority"
                tip="Concisely summarize the issue in one or two sentences."
                type='select'
                variant='normal'
                value={taskDetail.priorityId}
                onChange={value=>updateField('priorityId',value)}
                options={priorityOptions}
                renderOption={renderPriority}
                renderValue={renderPriority}
            />
        </Fragment>
    )
}
