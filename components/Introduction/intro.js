import styled from 'styled-components'

export const IntroContainer = styled.div`
backgroud: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;

position:  relative;
z-index: 1;
`

export const IntroVideo = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const Content = styled.div`
z-index: 3;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (max-width: 767px) and (orientation: portrait) {
    
}

@media only screen and (max-width: 800px) {
   
}

@media only screen and (max-width: 1500px) {
    
   
}

@media only screen and (min-width: 1501px){
  
}
`



export const Name = styled.ul`
color: #B0E0E6;
font-size: 70px;
text-align: center;
margin-left: auto;
margin-right: auto;
margin-top: 45px;
padding-bottom:  3%;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
 
}
@media only screen and (max-width: 767px) {
    /* phones */
}
@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
    font-size: 40px;
}
`

export const Intro = styled.div`
color: #B0E0E6;
font-size: 25px;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 600px;
height: 5px;
margin: 0 5px;
padding-bottom: 15%;
text-align: left;
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
}
@media only screen and (max-width: 767px) {
    /* phones */
}
@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
    font-size: 20px;
    width: 350px;
    text-align: center;
}
@media only screen and (max-width: 400px) and (orientation: portrait) {
    /* portrait phones */
    font-size: 17px;
    width: 300px;
    text-align: center;
}
@media only screen and (max-width: 300px) and (orientation: portrait) {
    /* portrait phones */
    font-size: 15px;
    width: 250px;
    text-align: center;
}
`

export const ProfilePic = styled.div`
z-index: 3;
justify-content: center;
margin-top: 20%;
@media only screen and (min-width: 781px) {
  
}
@media only screen and (max-width: 1300px) {
   
    margin-top: 20%;
margin-bottom: 3%;
width: 50%;
}
@media only screen and (max-width: 767px) and (orientation: portrait) {
    margin-top: 60%;
    margin-bottom: 3%;
    width: 50%;
}
`