import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'
import axios from 'axios'



const ProductsScreen = ({ navigation }: any) => {

  dayjs.locale('tr')

  const [products, setproducts] = useState<any[]>([])

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/orders")
        .then(res => {
            setproducts(res.data)
        })
}, [])

  return (<>
   <View style={{ paddingLeft: '3%', paddingRight: '3%' }}>
    <Divider style={{ marginBottom: '2%' }} />
        <FlatList
            data={products}
            renderItem={({ item }) => {
            item.orderDate = dayjs(item.orderDate, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')
            item.requiredDate = dayjs(item.requiredDate, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')
            item.shippedDate = dayjs(item.shippedDate, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')
            return <>
                <Pressable onPress={() => navigation.navigate("ProductsDetail", {
                  item: item
                }) }>
                    <Card key={item.id}>
                        <Card.Cover source={{ uri: "https://picsum.photos/200/300" }} />
                        <Card.Title titleStyle={{ fontSize: 25 }} title={item.id} subtitle={item.orderDate} />
                    </Card>
                </Pressable>
            </>
            }
            }
        />
   </View>
      
  </>)
}

export default ProductsScreen