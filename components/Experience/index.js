import React from 'react'
import Vanguard from '../../profilePic/vanguard.jpg';
import Twitter from '../../profilePic/twitter.jpg';
import Education from '../../profilePic/cplus.png';
import { Rectangle, RecentExprience,  ImageContainer, Main } from './exprience';




function exprience() {
   
    return (
        <>



            <Rectangle>
      
             
       
            <RecentExprience >
                    Experience
                </RecentExprience>

               
       <Main>

       
       <ImageContainer>
           
       <nav id="title">
        SWE Intern 
               </nav>
             
              
               <img id="experienceImage" src={Vanguard}  />
             
               <p id="descriptionOfExperience">
            Incoming Application Development Intern at Vanguard for Summer 2021
            </p>


            </ImageContainer>
          

            <ImageContainer>
            <nav id="title" >
                   Twitter&nbsp;Bot
               </nav>
         
        
               <img  id="experienceImage" src={Twitter} />

               <p id="descriptionOfExperience">
            I built a Twitter Bot that Tweets Daily Deals from Amazon using the
            Twitter API. I built the bot using the language, Python. In addition, 
                I used web scraping (Beautiful Soup) in order to grab the elements
                 from Amazon such as,
            the rating, new price, original price, and etc.
            </p>
            

            </ImageContainer>
         
           
            <ImageContainer>
            <nav id="title" >
                   Classroom&nbsp;Plus
               </nav>
         
        

               <img  id="experienceImage" src={Education}  />
        
        <p id="descriptionOfExperience">
        At a hackathon in the University of Illinois, my group and I built an application that makes online classes more interesting during
        COVID-19. I developed the front-end of the application and lead the front-end team.   
        </p>
            </ImageContainer>

         </Main>

        
            </Rectangle>
        
        </>
    )
}

export default exprience
