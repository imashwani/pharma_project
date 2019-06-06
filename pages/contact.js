
import react, {Component} from 'react';
import {Form, Input, Icon, Card, Button, Head, Alert, message, Layout} from 'antd';
import Link from 'next/link';
import {withRouter} from "next/router";
import App from "../components/layouts/App";

class Contact extends Component {
  render(){
    return (
      <App >
      <div style={{padding:"80px"}}>
      
        <h1>{"\<\<"}
		<u>This is contacts page</u>
		{"\>\>"}
        </h1>
        <h2>Email: ashwani.p30@gmail </h2>
	<h2>Office: New Delhi, India </h2>
	<h2>Phone:  +91-9999999999 </h2>


      </div>
      </App> 
      )
    }
}
  
export default Contact;
