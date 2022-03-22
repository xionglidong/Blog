import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import LDThemeHeaderNormal from '@/components/theme-header-normal';
import LDAlphaList from './c-cpns/alpha-list';
import LDArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function LDArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <LDThemeHeaderNormal title={currentType.name} />
      <LDAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <LDArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
