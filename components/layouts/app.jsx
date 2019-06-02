import react, { Component } from "react";
import { Layout, Icon, Dropdown, Menu, Button, Avatar } from "antd";
const { SubMenu } = Menu;
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import Loading from "./Loading.jsx";
import "./app.css";
import { filterOption } from "rc-mentions/lib/util";

class App extends Component {
  state = {
    usr: ""
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Layout>
        <Header
          style={{
            display: "flex",
            color: "#fff",
            justifyContent: "space-between",
            position: "fixed",
            zIndex: 100,
            width: "100%",
              
          }}
        >
          <Link href={"/index"}>
            <div>
              <Icon
                style={{ fontSize: "22px", cursor: "pointer" }}
                type="medicine-box" theme="filled"
                /> 
                 <Link href={"/index"}>
             <b>
                <span> MajMed Pharma</span>
              </b>
              </Link>
            </div>
          </Link>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ marginTop: "5px", padding: "5px" }}
            theme="dark"
            >

            <Menu.Item key="mail" >
            <Icon type="info-circle" />
              About Us
            </Menu.Item>

            <SubMenu
              title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Operations
                  </span>
                }
              >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                
                <a href="/contact" 
                // target="_blank" 
                rel="noopener noreferrer">
                   <Icon type="mail" />
                    Contact Us
                </a>
            </Menu.Item>
          </Menu>


        </Header>
        <Content 
        style={{ margin: "100px auto", minHeight: "100vh" , 
        // backgroundImage: "url(" + "https://images.unsplash.com/photo-1471864190281-a93a3070b6de" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      
         }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: "center", fontSize: "20px" }}>
          MajMed Pharma Pvt. Ltd. ©2019 Made with <Icon type="heart" /> care
              </Footer>
      </Layout>
    );
  }
}

export default App;