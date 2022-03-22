import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import LDTopRanking from "./c-cpns/top-ranking";
import LDRankingHeader from './c-cpns/ranking-header';
import LDRankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function LDRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <LDTopRanking/>
      </RankingLeft>
      <RankingRight>
        <LDRankingHeader/>
        <LDRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
