import React from 'react';
import { Redirect } from "react-router-dom";

// import LDDiscover from "../pages/discover";
// import LDRecommend from "../pages/discover/c-pages/recommend";
// import LDRanking from "../pages/discover/c-pages/ranking";
// import LDSongs from "../pages/discover/c-pages/songs";
// import LDDjradio from "../pages/discover/c-pages/djradio";
// import LDArtist from "../pages/discover/c-pages/artist";
// import LDAlbum from "../pages/discover/c-pages/album";
// import LDPlayer from "../pages/player";

// import LDFriend from "../pages/friend";
// import LDMine from "../pages/mine";

const LDDiscover = React.lazy(_ => import("../pages/discover"));
const LDRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const LDRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const LDSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const LDDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const LDArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const LDAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const LDPlayer = React.lazy(_ => import("../pages/player"));

const LDReact = React.lazy(_ => import("../pages/react"));


const LDFriend = React.lazy(_ => import("../pages/friend"));
const LDMine = React.lazy(_ => import("../pages/mine"));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/react"/>
    )
  },
  {
    path: "/discover",
    component: LDDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/artist"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: LDRecommend
      },
      {
        path: "/discover/ranking",
        component: LDRanking
      },
      {
        path: "/discover/songs",
        component: LDSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: LDDjradio
      },
      {
        path: "/discover/artist",
        component: LDArtist
      },
      {
        path: "/discover/album",
        component: LDAlbum
      },
      {
        path: "/discover/player",
        component: LDPlayer
      }
    ]
  },
  {
    path: "/react",
    component: LDReact
  },
  {
    path: "/friend",
    component: LDFriend
  },
  {
    path: "/mine",
    component: LDMine
  }
]