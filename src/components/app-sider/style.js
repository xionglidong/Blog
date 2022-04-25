import styled from "styled-components";

export const AppSiderWrapper = styled.div`
  min-height: 100vh;
  width:200px;
  font-size: 14px;
  
  .sider{
    border-right:1px solid #f0f2f5;
    height:100vh;
    .logoInner{
      margin-top:10px;
      font-size:16px;
      font-weight:bold;
      display:flex; 
      justify-content:center;
      align-items:center;
      width=100%;
      .logo{
        margin-right:10px
      }
      .logoText{}
    }
    .icon{
      margin-right:5px;
    }
  }
  .ant-layout-sider-children{
    background-color:white;
  }
`

