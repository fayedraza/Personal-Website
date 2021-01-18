import React from 'react'
import {SidebarContianer, SidebarText, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';
import Resume from '../../resume/resume.pdf'




const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContianer isOpen = {isOpen}  onClick ={toggle}>
            <Icon  onClick ={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
           
                 <SidebarText isOpen = {isOpen}  onClick ={toggle} onClick={(e) => {
            e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });}}>
                     About
                </SidebarText>







                <SidebarText isOpen = {isOpen} onClick={toggle, (e) => {
            e.preventDefault();
                    window.scrollTo({
                      top: 800,
                      behavior: 'smooth'
                    });}}>
                          
               Experience
   
                </SidebarText>

          
          


                <SidebarLink onClick={(e) => {
            e.preventDefault();
            window.location.href= Resume
                }}>
                Resume
                </SidebarLink>

                <SidebarText isOpen = {isOpen}  onClick ={toggle} onClick={(e) => {
            e.preventDefault();
                    window.scrollTo({
                      top:  2000,
                      behavior: 'smooth'
                    });}}>
                Contact
                </SidebarText>

            </SidebarMenu>
            </SidebarWrapper>

          

        </SidebarContianer>
    )
}

export default Sidebar