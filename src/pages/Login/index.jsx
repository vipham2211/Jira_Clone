import Form from 'components/Form'
import Logo from 'components/Logo'
import React, { useEffect } from 'react'
import * as Yup from 'yup';
import Button from 'components/Button';
import { Actions, FormElement, FormSection, FormTitle, GlobalStyle, Group, Section, Text } from './Styles';
import { useDispatch } from 'react-redux';
import { userLoginAction } from 'redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Login() {

const dispatch=useDispatch()
const userLogin = useSelector(state=> state.user.userLogin)

const navigate= useNavigate()


useEffect(()=>{

    if(Object.keys(userLogin).length !== 0){
        navigate('/project')
       
    }
},[userLogin,navigate])

const initialValues = {
   email:'',
   password:''
  }
  const CreateTaskSchema = Yup.object().shape({
    email: Yup.string() 
    .required('Email is required'), 
    password: Yup.string() 
    .required('Password is required'), 
  
  });

  const handleSubmit = (values) => {
  
   
    dispatch(userLoginAction(values))
    
    
  };
  return (

    <>
    <GlobalStyle />
    <Section>
    <Group>
        <Logo  />
        <Text>Jira Clone</Text>
    </Group>
      <FormSection>
      <FormTitle>Login to your account</FormTitle>
        <Form
         initialValues={initialValues}
         onSubmit={handleSubmit}
         validationSchema={CreateTaskSchema}
        >
            <FormElement>
                <Form.Field
                 name='email'
                 label='Email'
                />
                 <Form.Field
                 name='password'
                 label='Password'
                 password
                />
                <Actions>
                    <Button type='submit' variant='primary'> Sign in</Button>
                </Actions>
               
            </FormElement>
        </Form>    
      </FormSection>
      
    </Section>
  </>
  )

}
