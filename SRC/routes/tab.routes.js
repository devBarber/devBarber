import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../Views/Home/Home';
import Login from "../Views/TelaLogin/Login";


const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen
            name="Inicio"
            component={Home}
            />
        
        <Tab.Screen
            name="Login"
            component={Login}
            />
        </Tab.Navigator>
    )
}