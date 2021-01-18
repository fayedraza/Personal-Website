import React, {Component } from 'react'
import {
  Rectangle,
  Title,

}
from './textbox'


class questionBox extends Component {
   
       

    constructor(props){
        super(props)
        this.state ={
            fullname: '',
            emailAddress: '',
            subject: '',
            message: ''


        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange = (event) => {
        this.setState({
        fullname: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
        emailAddress: event.target.value
        })
    }

    handleSubjectChange = (event) => {
        this.setState({
        subject: event.target.value
        })
    }

    handleMessageChange = event => {
        this.setState({
        message: event.target.value
        })
    }


     handleSubmit = event => {

        

        if(this.state.fullname === '' || this.state.emailAddress === '' || this.state.message === '' || this.state.subject === ''){
        alert(`One or more of the inputs are empty`)
        event.preventDefault();
     } else{
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(!reg.test(this.state.emailAddress )){
            alert('Email Address is Invalid');
            this.setState( { emailAddress: '' });
        }else{
        
        alert(`Message has been sent sucessfully. Please wait to hear back within 3-5 days. `)

        var subject = this.state.subject;
        var message = this.state.message;
        var email = this.state.emailAddress;
        var name = this.state.fullname;
     
        fetch(`https://sendemailsendgrid.herokuapp.com/sendemail/?subject=${subject}&message=${message}&email=${email}&name=${name}`);
      

        this.setState( { fullname: '' });
        this.setState( { emailAddress: '' });
        this.setState({subject:''});
        this.setState({message:''});
       
     
        }
    }
        event.preventDefault();
     } 

      Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

    render(){
    return (
      
    <>


           <Rectangle>
<Title id='contact'>
    Contact
</Title>
<br></br>
<p id='interestToContact' >
    If you are interested in contacting me for any opportunities or collaboration please
    contact me by filling the form below. I will respond as soon as possible.
</p>




    <form onSubmit={this.handleSubmit}>

    <p class = "inputs" >
       
        <textarea id="inputs" value={this.state.fullname}  onChange = {this.handleNameChange} type='text' placeholder='Name' name='fullname'  /></p>

        <p class = "inputs">
        
        <textarea id="inputs" value={this.state.emailAddress}  onChange = {this.handleEmailChange} type='text' placeholder='Email' name='emailAddress'  /></p>
        
        <p class = "inputs" >
      
         <textarea id="inputs" value={this.state.subject}  onChange = {this.handleSubjectChange} type='text' placeholder='Subject' name='subject'  /></p>
       
         <p class = "inputs" >

        <textarea id="message" value={this.state.message}  onChange = {this.handleMessageChange}  type='text' placeholder='Message' name='message'  /></p>
       
        
        <p><button class = "inputs" >Submit</button></p>

        </form>

    <Title>
        <br>
        </br>
   Follow Me
</Title>
<br></br>
<p id="interestToContact" >
 Feel free to connect with me =)
 </p>

<br></br>
<br></br>


<a  id='socialMedia' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://github.com/fayedraza';
    }}>
Github

</a>


<a  id='socialMedia' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/in/fayed-raza/';
    }}>
Linkedln

</a>


<a  id='socialMedia' onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/faderazor/';
    }}>
Instagram

</a>

               </Rectangle> 
        </>
    )
}
}

export default questionBox
