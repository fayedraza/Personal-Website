import styled from 'styled-components'

export const Rectangle = styled.nav`


background: #000;
height: 800px;


font-size: 1rem;
position: sticky;

z-index: 1;


@media only screen and (min-width: 781px) {
  
}


@media only screen and (max-width: 1500px) {
   
    height: 700px;

  
}

@media only screen and (max-width: 1100px) {
   
    height: 1700px;

  
}

@media only screen and (max-width: 1100px) and (orientation: portrait) {
    height: 1200px;
}

@media only screen and (max-width: 1100px) and (orientation: landscape) {
    height: 1200px;
}

@media only screen and (max-width: 1100px)   {
    height: 1200px;
}


`

export const RecentExprience  = styled.nav`
color: #B0E0E6;
font-size: 2.5rem;
text-align: center;
padding-top: 1%;


@media only screen and (min-width: 781px) {
  
}

@media only screen and (max-width: 780px) {
   
    
  
}

@media only screen and (max-width: 767px) and (orientation: portrait) {
  
}

@media only screen and (max-width: 1100px) {
    margin: 5px;
    align-content: center;
   

  
}

@media only screen and (max-width: 1100px) and (orientation: portrait) {
   

   
    margin: 5px;
    align-content: center;
  

}

@media only screen and (max-width: 1100px) and (orientation: landscape) {
   

   
    margin: 5px;
    align-content: center;
  

}
`


export const Main = styled.div`
position: relative;
    overflow: hidden;

    @media only screen and (min-width: 781px) {
  
    }
    
    @media only screen and (max-width: 1100px) {
       
   
       
        

  
        /* Internet Explorer 10 */
        display:-ms-flexbox;
        -ms-flex-pack:center;
        -ms-flex-align:center;
        /* Firefox */
        display:-moz-box;
        -moz-box-pack:center;
        -moz-box-align:center;
        /* Safari, Opera, and Chrome */
        display:-webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;
        /* W3C */
        display:box;
        box-pack:center;
        box-align:center;
    
      
    }
    
    @media only screen and (max-width: 1100px) and (orientation: portrait) {
       
        margin-right: auto;
        margin-left: auto;
        
        display: flex;              /* establish flex container */
            flex-direction: column;     /* stack flex items vertically */
            justify-content: center;    /* center items vertically, in this case */
          
            
  

    }

    @media only screen and (max-width: 1100px) and (orientation: landscape) {
       
        margin-right: auto;
        margin-left: auto;
        
        display: flex;              /* establish flex container */
            flex-direction: column;     /* stack flex items vertically */
            justify-content: center;    /* center items vertically, in this case */
          
            
  

    }
`

export const ImageContainer = styled.div`

float: left;
width: 31%;
margin: 1% 1% 45px 1%;


@media only screen and (min-width: 781px) {
  
}

@media only screen and (max-width: 1100px) {
   
    width: auto;
    float: none;
    margin: 5px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
  
  
}

@media only screen and (max-width: 1100px) and (orientation: portrait) {
      
    width: auto;
    float: none;
    margin: 5px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
   

}


@media only screen and (max-width: 1100px) and (orientation: landscape) {
      
    width: auto;
    float: none;
    margin: 5px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
   

}

`


export const titleofexprience  = styled.nav`
    position: absolute;
    bottom: 0px;
    color: #B0E0E6;

    @media only screen and (max-width: 1100px) {
   
        display: block;
    
        float: initial;
    
        margin:0;
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
    
      
    }
    
    @media only screen and (max-width: 1100px) and (orientation: portrait) {
          
        display: block;
    
        float: initial;
    
        margin:0;
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
    
    
    }

    @media only screen and (max-width: 1100px) and (orientation: landscape) {
          
        display: block;
    
        float: initial;
    
        margin:0;
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
    
    
    }
    

`
export const discriptionofexprience  = styled.a`

    margin-top: 1%;
  font-size: 5rem;
  color: #B0E0E6;
 
  text-align: left;


    @media only screen and (min-width: 781px) {
  
    }
    
    @media only screen and (max-width: 780px) {
       
    
   
    }
    
    @media only screen and (max-width: 767px) and (orientation: portrait) {
      
    }

    @media only screen and (max-width: 1100px) {
   
        display: block;
    
        float: initial;
    
        margin:0;
        
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
    
        
    
    }
    
    @media only screen and (max-width: 1100px) and (orientation: portrait) {
          
       
        display: block;
    
        float: initial;
    
        margin:0;
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
       
   
    }

    @media only screen and (max-width: 1100px) and (orientation: landscape) {
          
       
        display: block;
    
        float: initial;
    
        margin:0;
        margin-bottom: 5%;
    justify-content: center;
    
    margin-right:auto;
    margin-left:auto;
       
   
    }
`