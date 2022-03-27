import React, { memo,useState } from 'react';
import { NavLink } from "react-router-dom";
// import classnames from "classnames";

import { siderLinks } from "@/services/local-data";

import { Layout, Menu } from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';




// import { Input } from "antd";
// import { SearchOutlined } from '@ant-design/icons';

import {
  AppSiderWrapper
  // AppHeaderWrapper,
  // HeaderLeft,
  // HeaderRight
} from "./style";


const { Sider } = Layout;
// const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default memo(function LDAppHeader() {
  // hooks
  const [collapsed, setCollapsed] = useState(false);
  function onCollapse(collapsed){
    setCollapsed(collapsed)
  }
   const showItem = (item, index) => {
      return (
        <NavLink to={item.link}>
          {item.title}
        </NavLink>
      )
  }
  return (
    <AppSiderWrapper>
        <Sider className="sider" collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              {
                siderLinks.map((item, index) => {
                  return (
                    <Menu.Item key={index} icon={item.icon}>
                      {showItem(item, index)}
                    </Menu.Item>
                  )
                })
              }
              {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>

              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>

              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>

              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item> */}
            </Menu>
        </Sider>
    </AppSiderWrapper> 
  )
})
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
  
  
