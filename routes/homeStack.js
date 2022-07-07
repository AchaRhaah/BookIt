import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SelectAgency from "../screens/SelectAgency";
const screens = {
  Agency: {
    screen: SelectAgency,
  },
  Home: {
    screen: HomeScreen,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
