import styled from 'styled-components'
/*import {Link as LinkR} from 'react-router-dom'*/
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`


background: #000;
height: 125px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;




@media screen and (max-width: 960px){
    
    height: 35px;

}
`

export const NavbarContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
height:  80px;
z-index: 1;
width: 100%;
padding: 0  24px;
max-width: 1100px;

`


export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 900px){
    color: #fff;
    display: block;
    position: absolute;
    top: 30%;
    right: 0px;
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 900px){
    display: none;
}
`

export const NavLinks = styled(LinkS)`
color: #ffffff;
text-align: center;
padding: 0 5rem;
justify-content: space-between;
cursor: pointer;
font-size: 30px;
font-family: "Times New Roman", Times, serif;

&:hover{
    text-decoration: underline;
    color: #0000FF
}

`;



