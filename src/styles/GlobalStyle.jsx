
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    /* margin: 0;
    padding: 0; */
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: #ddfff7;
    color: #333;
    /* line-height: 1.6; */
  }

  h1, h2 {
    color: #333;
  }

  button {
    background-color: #ffa69e;
    color: #242424;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #ff5546;
    }
  }

  input[type="text"] {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  } 


 
`
export default GlobalStyle