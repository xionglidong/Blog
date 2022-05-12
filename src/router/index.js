import React from 'react';
import { Redirect } from "react-router-dom";

// import Discover from "../pages/discover";
// import Recommend from "../pages/discover/c-pages/recommend";
// import Ranking from "../pages/discover/c-pages/ranking";
// import Songs from "../pages/discover/c-pages/songs";
// import Djradio from "../pages/discover/c-pages/djradio";
// import Artist from "../pages/discover/c-pages/artist";
// import Album from "../pages/discover/c-pages/album";
// import Player from "../pages/player";

// import Friend from "../pages/friend";
// import Mine from "../pages/mine";

const Discover = React.lazy(_ => import("../pages/discover"));
const Recommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const Ranking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const Songs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const Djradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const Artist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const Album = React.lazy(_ => import("../pages/discover/c-pages/album"));
const Player = React.lazy(_ => import("../pages/player"));

// const React = React.lazy(_ => import("../pages/react"));
const JavaScript = React.lazy(_ => import("../pages/JavaScript"));
const Vue = React.lazy(_ => import("../pages/Vue"));
const Node = React.lazy(_ => import("../pages/Node"));


const Friend = React.lazy(_ => import("../pages/friend"));
const Mine = React.lazy(_ => import("../pages/mine"));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/JavaScript"/>
    )
  },
  {
    path: "/discover",
    component: Discover,
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
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },
  {
    path: "/JavaScript",
    component: JavaScript
  },
  {
    path: "/react",
    component: React
  },
  {
    path: "/Node",
    component: Node
  },
  {
    path: "/Vue",
    component: Vue
  },
  {
    path: "/friend",
    component: Friend
  },
  {
    path: "/mine",
    component: Mine
  }
]