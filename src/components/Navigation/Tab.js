import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../Profile';

const Tab = createBottomTabNavigator();

function TabBar() {
    <Tab.Navigator>
        <Tab.Screen name='profileTab' component={Profile}/>
    </Tab.Navigator>
}

export default TabBar;