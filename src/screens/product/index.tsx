import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './ProductsScreen';
import ProductDetailScreen from './ProductDetailScreen';



const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => {
    return (<>
        <ProductStack.Navigator
            screenOptions={
                {
                    headerShown: true
                }
            }
        >
            <ProductStack.Screen name="Products" component={ProductsScreen} />
            <ProductStack.Screen name="ProductsDetail" component={ProductDetailScreen} />
        </ProductStack.Navigator>

    </>
    )
}

export default ProductStackScreen