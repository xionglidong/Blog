import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import LDThemeHeaderRCM from '@/components/theme-header-rcm';
import LDTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function LDRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <LDThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <LDTopRanking info={state.topUpList}/>
        <LDTopRanking info={state.topNewList}/>
        <LDTopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
