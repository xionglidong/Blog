import React, { memo } from 'react';

import LDRadioCategory from './c-cpns/radio-category';
import LDRadioRecommend from './c-cpns/radio-recommend';
import LDRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function LDDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <LDRadioCategory />
      <LDRadioRecommend />
      <LDRadioRanking />
    </DjRadioWrapper>
  )
})
