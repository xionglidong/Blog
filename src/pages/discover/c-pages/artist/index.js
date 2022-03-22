import React, { memo } from 'react';

import LDArtistCategory from './c-cpns/artist-category';
import LDArtistList from './c-cpns/artist-list';
import { LDArtistWrapper } from './style';

export default memo(function LDArtist() {
  return (
    <LDArtistWrapper>
      <div className="content wrap-v2">
        <LDArtistCategory/>
        <LDArtistList/>
      </div>
    </LDArtistWrapper>
  )
})
