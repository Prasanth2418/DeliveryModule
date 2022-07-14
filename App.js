
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import PendingOrdersPage from './src/PendingOrdersPage';
import OrderDetails from "./src/OrderDetails"
import Com_Orders_page from "./src/Com_Orders_Page"
import Collections from './src/Collections';
import ViewDetails from "./src/ViewDetails"
import LoginPage from './src/LoginPage';
import Settings from './src/Settings';
import Profile from './src/Profile';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
   <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{headerShown:false
    }}
    initialRouteName={"Login"}
    >
      <Stack.Screen name='Login' component={LoginPage}/>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="PendingOrders" component={PendingOrdersPage}/>
      <Stack.Screen name="orderDetails" component={OrderDetails}/>
      <Stack.Screen name="completedOrders" component={Com_Orders_page}/>
      <Stack.Screen name="Collections" component={Collections}/>
      <Stack.Screen name="ViewDetails" component={ViewDetails}/>
      <Stack.Screen name="settings"  component={Settings}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}


