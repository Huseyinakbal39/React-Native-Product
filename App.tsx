import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductStackScreen from './src/screens/product'




const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Tab.Screen
            name="ProductsStack"
            component={ProductStackScreen} 
            options={{
              tabBarLabel: 'Products',

            }}

            />

        </Tab.Navigator>
      </SafeAreaView>

    </NavigationContainer>

  )

}



export default App;
