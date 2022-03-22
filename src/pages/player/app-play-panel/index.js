import React, { memo } from 'react';

import LDPlayHeader from './c-cpns/play-header';
import LDPlayList from './c-cpns/play-list';
import LDLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function LDAppPlayList() {
  return (
    <PanelWrapper>
      <LDPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <LDPlayList/>
        <LDLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
