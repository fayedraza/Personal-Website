import React from 'react'
import Video from '../../videos/video.mp4';
import ProfileImage from '../../profilePic/profileImage.jpeg';
import {IntroContainer, IntroVideo, Intro, VideoBg, Content, Name, ProfilePic} from './intro'

const intro = () => {
    return (
       
        <IntroContainer>
              
              <IntroVideo>
               <VideoBg autoPlay loop muted src ={Video} typed='video/mp4'/>
               </IntroVideo>

        <Content>  
            <Name>
                Fayed Raza
            </Name>
            <Intro>
                Incoming Software Engineer Intern at Vanguard
            </Intro>
            <Intro>
                Learning Assistant for Rutgers CS112 Data Structures
            </Intro>
            <Intro>
            Hi, my name is Fayed. I am currently a sophomore at Rutgers University majoring in Bachelor of Science, Computer Science and minoring in Mathematics. Asides from school, being a learning assistant, and interning, I like to build apps. Whether if it is a bot, website, etc., I have the interest to learn and build it, especially when I get to work with others.
            </Intro>
            <ProfilePic>
               <img id="profilePic" src={ProfileImage} alt="nice" />
            </ProfilePic>
        </Content>

    

           
           
     </IntroContainer>
    );
};

export default intro