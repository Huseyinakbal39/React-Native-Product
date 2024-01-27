import { View, Text, Linking, Share } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const ProductDetailScreen = ({ route }: any) => {

    const { item } = route.params
    return (<>
        <Card key={item.id}>
            <Card.Cover source={{ uri: "https://picsum.photos/200/300" }} />
            <Card.Title titleStyle={{ fontSize: 25 }} title={item.id} subtitle={item.customerId} />
            <Card.Content>
                <Text>{item.orderDate}</Text>
                <Text>{item.requiredDate}</Text>
                <Text>{item.shippedDate}</Text>
                <Text>{item.shipVia}</Text>
                <Text>{item.shipName}</Text>  
            </Card.Content>
        </Card>
    </>)
}

export default ProductDetailScreen