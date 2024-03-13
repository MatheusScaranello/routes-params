import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Details from "../screens/Details";

import { User } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} initialParams={User} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
