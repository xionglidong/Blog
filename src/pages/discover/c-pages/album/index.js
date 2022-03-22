import React, { memo } from 'react';

import LDHotAlbum from './c-cpns/hot-album';
import LDTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function LDAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <LDHotAlbum/>
      <LDTopAlbum/>
    </AblumWrapper>
  )
})
