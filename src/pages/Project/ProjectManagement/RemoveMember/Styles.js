import styled from "styled-components";
import { color } from "utils/Styles";

export const StyledRemoveMember = styled.table`
border-collapse: collapse;
font-size: 0.9em;
font-family: sans-serif;
min-width: 250px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background-color: ${color.primary};
    color: #ffffff;
    text-align: left;
}
th,td {
    padding: 12px 15px;  
    
}
tbody tr{
    border-bottom: 1px solid  ${color.primary}
   
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
tbody tr:last-of-type {
    border-bottom: 2px solid ${color.primary};
}

`

