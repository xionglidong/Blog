import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

import LDAppHeader from '@/components/app-header';
import LDAppFooter from '@/components/app-footer';
import LDAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function LDMain() {
  return (
    <HashRouter>
      <LDAppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <LDAppFooter />
      <LDAppPlayBar/>
    </HashRouter>
  )
})
