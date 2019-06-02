import react, {Component} from 'react';
// import {Form, Input, Icon, Card, Button, Head, Alert, message, Layout} from 'antd';
import Link from 'next/link';
import {withRouter} from "next/router";
import App from "../components/layouts/App";


class Index extends Component {
render(){
  return (
  <App>
    <div  style={{paddingLeft:"40px", paddingRight:"40px"}}>
      
      <p>
      <b>This is MajMed Pharma Pharmaceutical company. <br></br><br></br>

A pharmaceutical company, or drug company, is a commercial business licensed to research, develop, market and/or distribute drugs, most commonly in the context of healthcare.

They can deal in generic and/or brand medications.

They are subject to a variety of laws and regulations regarding the patenting, testing and marketing of drugs, particularly prescription drugs.

From its beginnings at the start of the 19th Century, the pharmaceutical industry is now one of the most profitable and influential in existence, attracting praise and controversy.

Drug discovery is the process by which drugs are discovered and/or designed.

In the past most drugs have been discovered either by identifying the active ingredient from traditional remedies or by serendipitous discovery.

A newer approach has been to understand how disease and infection are controlled at the molecular and physiology level and to target specific entities based on this knowledge.

New technologies and Data Management/Informatics systems are now employed to speed up this process.

Drug development is considered a costly and intensive process.

Of all compounds investigated for use in humans only a small fraction is eventually approved, and only after heavy investment in pre-clinical development, clinical trials, and safety monitoring to determine the safety and efficacy of a compound.
</b>
 </p>

      <a href="/contact"> the contacts page</a>
    </div>
  </App>  
    )
}
}
  
export default Index;