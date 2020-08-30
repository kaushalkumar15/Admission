import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screen/Home';
import App from "../App";

const screen = {
    Welcome:{
        screen: App
    }
    Home:{
        screen: Home
    }
}

const Homestack = createStackNavigator(screen);

export default createStackNavigator(Homestack);