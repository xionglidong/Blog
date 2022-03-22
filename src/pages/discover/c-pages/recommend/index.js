import React, { memo } from 'react';

import LDTopBanner from './c-cpns/top-banner';
import LDHotRecommend from './c-cpns/hot-recommend';
import LDNewAlbum from './c-cpns/new-album';
import LDRankingList from './c-cpns/ranking-list';
import LDUserLogin from './c-cpns/user-login';
import LDSettleSinger from './c-cpns/settle-singer';
import LDHotRadio from './c-cpns/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function LDRecommend() {
  return (
    <RecommendWraper>
      <LDTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <LDHotRecommend />
          <LDNewAlbum />
          <LDRankingList />
        </RecommendLeft>
        <RecommendRight>
          <LDUserLogin />
          <LDSettleSinger />
          <LDHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
