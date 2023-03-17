import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../DashboardScreen";
import NotificationScreen from "../notificationScreen";
import SettingScreen from "../SettingScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (
        // <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Navigator>
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabs;