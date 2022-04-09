import { SafeAreaView, StyleSheet, Text, View , StatusBar} from 'react-native';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import SearchScreen from './screens/SearchScreen';
import AccountScreen from './screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenStack from './screens/HomeScreenStack';
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.andriod}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreenStack} 
    
          options={{
            headerShown: false,
            tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size} />
            
            
          }} 
          />
          <Tab.Screen name="Category" component={CategoryScreen} 
            options={{
              tabBarIcon: ({color, size})=> <Icon name="notebook" type='simple-line-icon' color={color} size={size} />
            }} 
          />
          <Tab.Screen name="Cart" component={CartScreen}  
           options={{
            tabBarIcon: ({color, size})=> <Icon name="cart-outline" type='material-community' color={color} size={size} />
          }} 
          />
          <Tab.Screen name="Search" component={SearchScreen} 
           options={{
            tabBarIcon: ({color, size})=> <Icon name="search" type='material' color={color} size={size} />
          }} 
          />
          <Tab.Screen name="Account" component={AccountScreen} 
            options={{
              tabBarIcon: ({color, size})=> <Icon name="person-outline" type='material' color={color} size={size} />
            }} 
          />
        </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  andriod: {
    paddingTop: StatusBar.currentHeight,
  }
  
});
