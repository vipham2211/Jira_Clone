import Form from "components/Form"
import styled, { createGlobalStyle } from "styled-components"
import { font } from "utils/Styles"

export const GlobalStyle = createGlobalStyle`
body {
background-color: #0062ff;
}
`
export const Section = styled.section`
height: 98vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export const FormSection = styled.section`
margin-top:10px;
padding:20px;
width: 360px;
min-width: 320px;
height: 300px;
background-color: white;
border-radius: 20px;
display:flex;
flex-direction:column;
justify-content:center;

`
export const Text = styled.div`
color:white;
${font.size(20)}
`
export const Group = styled.div`
display:flex;
gap:10px;
align-items:center;
`
export const FormElement = styled(Form.Element)`
`
export const FormTitle = styled.div`
text-align:center;
`
export const Actions = styled.div`
margin-top:15px;
display:flex;
justify-content:flex-end
`