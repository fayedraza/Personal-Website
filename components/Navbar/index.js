import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
     NavbarContainer, 
    MobileIcon,
NavMenu,
NavLinks
}
from './NavbarElements'
import Resume from '../../resume/resume.pdf'

const Navbar = ({toggle}) => {

   

    return (
        <>
             <Nav>
          <NavbarContainer>

           <NavMenu>





                   <NavLinks  onClick={(e) => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
    }}
                 
                   > About </NavLinks>
          
                   <NavLinks to="/Experience" onClick={(e) => {
                    window.scrollTo({
                      top: 800,
                      behavior: 'smooth'
                    });}}
                   >Experience</NavLinks>
                  
                   <NavLinks onClick={(e) => {
      e.preventDefault();
      window.location.href=Resume;
    }}>Resume</NavLinks>
                  
                   <NavLinks to="/Contact"
                   
                   onClick={(e) => {
                    window.scrollTo({
                      top: 1500,
                      behavior: 'smooth'
                    });
          }} > Contact</NavLinks>


                   
         
            </NavMenu>
            <MobileIcon onClick = {toggle}>

               <FaBars/>
           </MobileIcon>
          </NavbarContainer>

         
          </Nav>
        </>
    )
}

export default Navbar;

