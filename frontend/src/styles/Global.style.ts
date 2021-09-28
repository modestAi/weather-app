import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    background-color: #121212;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    }
  ul {
    list-style-type: none;
  }
  
  input:focus {
    outline: none;  
  }
  
  a {
    text-decoration: none;
  }
`;
