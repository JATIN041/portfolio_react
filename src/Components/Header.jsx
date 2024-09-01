
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

function Header() {
  return (
    <>
    <MainHeader>
    <NavLink style={{textDecoration:"none"}} to="/">
    <h2 className='logo'>Jatin patil</h2>
   </NavLink>
   <Navbar />
    </MainHeader>
  
    </>
  )
}
 const MainHeader = styled.header`
   padding: 0 4.8rem;
   height:: 10rem;
   background-color: ${({theme}) => theme.colors.bg};
   display: flex;
   align-items: center;
   justify-content: space-between;
   .logo {
   
    
    color:black;
    text-decoration:"none";
    font-family: "Work Sans", sans-serif;
     
   }
 `
export default Header