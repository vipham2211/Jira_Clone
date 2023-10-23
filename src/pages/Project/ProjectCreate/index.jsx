import React from 'react'
import { FormElement, FormHeading, StyledProjectCreate, ActionButton, SelectItem,SelectItemLabel } from './Styles'
import Breadcrumbs from 'components/Breadcrumbs'
import Form from 'components/Form'
import Button from 'components/Button'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { createProjectAction } from 'redux/action/projectAction'


export default function ProjectCreate() {

  const arrCategoryProject = useSelector((state) => state.project.arrCategoryProject)
  const isSpinnerLoading = useSelector((state) => state.spinner.isSpinnerLoading)
  
  const dispatch = useDispatch()

  const initialValues = {
    projectName: ``,
    description: "",
    categoryId: 1,
    alias:"2417"
  }

  const CreateProjectSchema = Yup.object().shape({
    projectName: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Project Name is required'),
    categoryId: Yup.number().required('Category is required')


  });
  
  const handleSubmit=(values)=>{
    const requestData = values
   
    dispatch(createProjectAction(requestData))

  }

  const genOptions = (arr, valueField, labelField) => {
    return arr.map(item => ({ value: item[valueField], label: item[labelField] }));
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

  return (
    <StyledProjectCreate>
      <Form
      initialValues={initialValues}
      validationSchema={CreateProjectSchema}
      onSubmit={handleSubmit}
      >
        <FormElement>
          <Breadcrumbs items={['Projects', 'Project Create']} />
          <FormHeading>Project Create</FormHeading>

          <Form.Field
            name="projectName"
            label="Project Name"
          />

          <Form.Field
            name="description"
            label="Description"
            tip="Describe the issue in as much detail as you'd like."
            type='textEditor'

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
          <ActionButton>
            <Button type="submit" variant="primary" isLoading={isSpinnerLoading}    >
              Create Project
            </Button>
          </ActionButton>

        </FormElement>
      </Form>


    </StyledProjectCreate>
  )
}
