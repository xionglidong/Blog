// import React, { memo, Suspense } from 'react';
import React, { memo } from 'react';
import { HashRouter } from "react-router-dom";
// import { renderRoutes } from "react-router-config";

import { Layout } from 'antd';

// import routes from "@/router"

import LDAppSider from '@/components/app-sider';
import LDAppMain from '@/components/app-main';
// import LDAppHeader from '@/components/app-header';
// import LDAppFooter from '@/components/app-footer';
// import LDAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function LDMain() {
  return (
    <HashRouter>
      <Layout>
        <LDAppSider />
        <LDAppMain />
        {/* <LDAppHeader /> */}
        {/* <Suspense fallback={<div>loading</div>}> */}
          {/* {renderRoutes(routes)} */}
        {/* </Suspense>} */}
        {/* { <LDAppFooter /> } */}
        {/* { <LDAppPlayBar/> } */}
      </Layout>
      
    </HashRouter>
  )
})
