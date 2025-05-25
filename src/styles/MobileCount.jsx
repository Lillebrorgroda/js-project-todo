
import styled from 'styled-components'


const MobileBox = styled.div`
  background-color: #ffa69e;
  color: #242424;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  
  z-index: 1000;


  @media (min-width: 601px) {
    display: none;
    
  }
`

export default MobileBox