import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCarts from '../components/restaurantDetail/ViewCarts';


export default function RestaurantDetail({route,navigation}) {
 return (
   <View>
        <About route={route}/>
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItems/>
        <ViewCarts navigation={navigation} restaurantName={route.params.name} />
   </View>
  );
}

