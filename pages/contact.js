
import react, {Component} from 'react';
import {Form, Input, Icon, Card, Button, Head, Alert, message, Layout} from 'antd';
import Link from 'next/link';
import {withRouter} from "next/router";
import App from "../components/layouts/App";
const back="../images/pharma.webp"

class Contact extends Component {
  render(){
    return (
      <App >
      <div style={{padding:"80px"}}>
      
        <h1>This is contacts page !!
        </h1>
        <h2>Email: </h2>


      </div>
      </App> 
      )
    }
}
  
export default Contact;
