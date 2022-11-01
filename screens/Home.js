import React, { useEffect,useState } from 'react';
import { View, ScrollView,SafeAreaView } from 'react-native';


import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';


const YELP_API_KEY = 'bV016exGuIvVpAhUBvKNYufiHdCp_qdtKefeAMT9v8BBA2OPZcjHGTxvO-Ih9nCSn30s4UzdR5Quzx5ndpPZKWWJO5-pffztZbKMexqRxWRyAFx_YNHnXTJmsg3DYnYx'


export default function Home({navigation}) {
  
  const [restaurantData,setRestaurantData] = React.useState(localRestaurants)
  
  const getRestaurantsFromYelp = () => {
      const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=roraima'
  
      const apiOptions = {
        headers:{
          Authorization:`Bearer ${YELP_API_KEY}`,
      },
    };
    
    return fetch(yelpUrl,apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  
 };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])
  
 
 
  return (
   <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
    <View style={{backgroundColor:"white",padding:15}}>
      <HeaderTabs/>
      <SearchBar />
    </View>
    
    <ScrollView showsVerticalScrollIndicator={false}>
       <Categories/>
       <RestaurantItem restaurantData ={restaurantData} navigation={navigation}/>
    </ScrollView>

    <Divider width={1}/>
    <BottomTabs/>
   
    
        
   </SafeAreaView>
  );
}