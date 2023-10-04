import React from 'react'
import { SelectItem, SelectItemLabel, StyledUpdateProject, Group, FormElement, Actions, ActionButton } from './Styles'
import Form from 'components/Form'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { updateProjectAction } from 'redux/action/projectAction';
import { updateModalAction } from 'redux/action/modalAction';

export default function UpdateProject({ project }) {

  const arrCategoryProject = useSelector((state) => state.project.arrCategoryProject)
  const isSpinnerLoading = useSelector((state)=> state.spinner.isSpinnerLoading)
  const dispatch = useDispatch()

  const initialValues = {
    id: project.id,
    projectName: `${project.projectName}`,
    creator: project.creator.id,
    description: project.description,
    categoryId: `${project.categoryId}`,
  }

  const UpdateProjectSchema = Yup.object().shape({
    projectName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Project Name is required'),
    categoryId: Yup.number().required('Category is required')


  });

  const genOptions = (arr, valueField, labelField) => {
    if (arr) {
      return arr.map(item => ({ value: item[valueField], label: item[labelField] }));
    } 
    return [];
  };

  const renderItem = (items, itemKey, IconComponent, LabelComponent, labelKey, iconSize = 18, iconTop = 1) => ({ value: id }) => {
    const item = items.find(item => item[itemKey] === Number(id))

    if (item) {
      return (
        <SelectItem key={item[itemKey]}>
          {IconComponent && <IconComponent type={item[itemKey]} size={iconSize} top={iconTop} avatarUrl={item.avatar ? item.avatar : null} />}
          <LabelComponent >
            {item[labelKey]}
          </LabelComponent>
        </SelectItem>
      )
    }
  }

  const categoryOptions = genOptions(arrCategoryProject, 'id', 'projectCategoryName');
  const renderCategory = renderItem(arrCategoryProject, 'id', null, SelectItemLabel, 'projectCategoryName')

  const handleSubmit = (values) => {
    const dataRequest = values
    dispatch(updateProjectAction(dataRequest))
    
  };


  return (
    <StyledUpdateProject>
      <Form
        initialValues={initialValues}
        validationSchema={UpdateProjectSchema}
        onSubmit={handleSubmit}
      >
        <FormElement>

          <Group>
            <Form.Field
              name="id"
              label="Project Id"
              disabled
            />
            <Form.Field
              name="projectName"
              label="Project Name"
            />
            <Form.Field
              name="categoryId"
              label="Project Category"
              type='select'
              variant='normal'
              options={categoryOptions}
              renderOption={renderCategory}
              renderValue={renderCategory}
            />
          </Group>


          <Form.Field
            name="description"
            label="Description"
            tip="Describe the issue in as much detail as you'd like."
            type='textEditor'

          />
          <Actions>
            <ActionButton type="button" variant="empty" onClick={() => dispatch(updateModalAction())}    >
              Cancel
            </ActionButton>
            <ActionButton type="submit" variant="primary" isLoading={isSpinnerLoading}    >
              Update Project
            </ActionButton>

          </Actions>

        </FormElement>
      </Form>
    </StyledUpdateProject>
  )
}
