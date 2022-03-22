import React, { memo } from 'react';

import LDPlayerInfo from './c-cpns/player-info';
import LDPlayerComment from './c-cpns/player-comment';
import LDPlayerSongs from './c-cpns/player-songs';
import LDPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function LDPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <LDPlayerInfo/>
          <LDPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <LDPlayerSongs/>
          <LDPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
