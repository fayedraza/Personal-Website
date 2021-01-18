import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Rectangle = styled.nav`


background: #000;
height: 1000px;


font-size: 1rem;
position: sticky;
top: 0;
z-index: 2;




@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
    
}

@media only screen and (max-width: 400px) and (orientation: portrait) {
    /* portrait phones */

}


@media only screen and (max-width: 700px) and (orientation: portrait) {
    /* portrait phones */
    height: 800px;
}
`

export const Title  = styled.nav`
color: #B0E0E6;
font-size: 2.5rem;
text-align: center;
margin-left: auto;
margin-right: auto;
padding-top: 1%;

@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  
}


@media only screen and (max-width: 700px) and (orientation: portrait) {
    /* portrait phones */
    
}


@media only screen and (max-width: 700px) and (orientation: portrait) {
    /* portrait phones */
    font-size: 2.5rem;
}
`


export const description = styled.div`



@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
  
   
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
    
}

@media only screen and (max-width: 400px) and (orientation: portrait) {
    /* portrait phones */
   
}


@media only screen and (max-width: 700px) and (orientation: portrait) {
    /* portrait phones */
    
}
`


export const socialMedia = styled(LinkS)`

color: #ffffff;
text-align: center;
padding: 0 5rem;
justify-content: space-between;
cursor: pointer;

&:hover{
    text-decoration: underline;
    color: #0000FF
}

@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}

@media only screen and (max-width: 767px) {
    /* phones */
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
   
}

@media only screen and (max-width: 400px) and (orientation: portrait) {
    /* portrait phones */
   
}


@media only screen and (max-width: 300px) and (orientation: portrait) {
    /* portrait phones */
   
}




`