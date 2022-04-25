import React, { memo,Suspense } from 'react';
import { renderRoutes } from "react-router-config";
import routes from "@/router"

// import { NavLink } from "react-router-dom";
// import classnames from "classnames";

// import { headerLinks } from "@/services/local-data";

import { Layout } from 'antd';
// import { Layout, Menu } from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';

// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';



// import { Input } from "antd";
// import { SearchOutlined } from '@ant-design/icons';

import {
  MainContainer
  // AppHeaderWrapper,
  // HeaderLeft,
  // HeaderRight
} from "./style";


const { Header, Content } = Layout;
// const { Header, Content, Footer, Sider } = Layout;

// const { SubMenu } = Menu;


// let collapsed =false

// function onCollapse(collapsed){
  // console.log(collapsed);
    // this.setState({ collapsed });
// }


export default memo(function AppMain() {

  // const showItem = (item, index) => {
  //   if (index < 3) {
  //     return (
  //       <NavLink to={item.link}>
  //         {item.title}
  //         <i className="sprite_01 icon"></i>
  //       </NavLink>
  //     )
  //   } else {
  //     return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
  //   }
  // }
  // <div className="select-list">
  //           {
  //             headerLinks.map((item, index) => {
  //               return (
  //                 <div className={classnames("select-item")} key={item.title}>
  //                   {showItem(item, index)}
  //                 </div>
  //               )
  //             })
  //           }
  //         </div>
  
  return (
    <MainContainer>
      <Layout style={{height: '100vh',display:'flex',flexDirection:'column'}}>
        <Header className="" style={{ borderBottom:'1px solid #f0f2f5',backgroundColor:"white" }} />
        <Content style={{flex:1,backgroundColor:'white',padding:'40px 64px 40px 64px',overflowY:'scroll' }}>
          {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div> */}
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </MainContainer>
  )
})
