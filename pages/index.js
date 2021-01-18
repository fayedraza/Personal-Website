import React , { useState }from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Introduction from '../components/Introduction/index';
import Experience from '../components/Experience/index';
import Questions from '../components/Questions/index';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
  <>
 <Router>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
       <Navbar toggle = {toggle}/>
       
       <Introduction/>
       <Experience/>
       <Questions/>

       </Router>  
     
  </>
  );
}

export default Home;