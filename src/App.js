import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";


import NHBasicList from "./screens/list/basic-list";
import NHListItemSelected from "./screens/list/listitem-selected";
import NHListDivider from "./screens/list/list-divider";
import NHListSeparator from "./screens/list/list-separator";
import NHListHeader from "./screens/list/list-headers";
import NHListIcon from "./screens/list/list-icon";
import NHListAvatar from "./screens/list/list-avatar";
import NHListThumbnail from "./screens/list/list-thumbnail";
import NHListItemNoIndent from "./screens/list/listitem-noIndent";
import SideBar from "./screens/sidebar";

import Login from "./screens/home/";
import Home from "./screens/home/home"
import NHList from "./screens/list/";
import Autopilot from "./screens/Autopilot/";
import Dashboard from "./screens/Dashboard";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    NHList: { screen: NHList },
    
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Login: { screen: Login },
    Home: {screen: Home},
    Autopilot: {screen: Autopilot},
    Dashboard: {screen: Dashboard},


    NHBasicList: { screen: NHBasicList },
    NHListItemSelected: { screen: NHListItemSelected },
    NHListDivider: { screen: NHListDivider },
    NHListSeparator: { screen: NHListSeparator },
    NHListHeader: { screen: NHListHeader },
    NHListIcon: { screen: NHListIcon },
    NHListAvatar: { screen: NHListAvatar },
    NHListThumbnail: { screen: NHListThumbnail },
    NHListItemNoIndent: { screen: NHListItemNoIndent },

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
