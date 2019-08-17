import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
//Pages
import Home from "../screens/home";
import Profile from "../screens/profile/profile";
import Register from "../screens/profile/register";
import TopFive from "../screens/topFive";
import Search from "../screens/search";
import { Icon } from "react-native-elements";
const homeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});
const topFiveStack = createStackNavigator({
  TopFive: {
    screen: TopFive,
    navigationOptions: ({ navigation }) => ({
      title: "TopFive"
    })
  }
});
const searchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Search"
    })
  }
});
const profileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile"
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  }
});
const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopFive: {
      screen: topFiveStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "TopFive",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star-face"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: searchStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Profile: {
      screen: profileStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-circle"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Profile",
    order: ["Home", "TopFive", "Search", "Profile"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);
export default createAppContainer(RootStack);
