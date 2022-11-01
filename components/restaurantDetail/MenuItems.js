import React from 'react';
import { View,Text, StyleSheet,Image,ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';




const foods = [
    {
        title: 'Hot Chicken',
        description: 'The best one from Mexico',
        price: ' 13$',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_p1-5IBEQfJUuMFY_Tk-NxeDx01PTLCHDg&usqp=CAU'
    },
    {
        title: 'Japanese food',
        description: 'The most well made from America',
        price: '120$',
        image:'https://img.freepik.com/fotos-gratis/comida-mista-ha-pratos-diferentes-na-mesa-do-restaurante-para-pessoas-diferentes_135427-5491.jpg'
    },
    {
        title: 'Peru',
        description: 'By colombiam chefs',
        price: '214$',
        image:'https://c4.wallpaperflare.com/wallpaper/997/782/414/carne-chino-comidas-plato-wallpaper-thumb.jpg'
    },
    {
        title: 'Pizza',
        description: 'The best for the cheapest price',
        price: '29$',
        image:'https://p4.wallpaperbetter.com/wallpaper/181/702/449/superb-italian-food-wallpaper-preview.jpg'
    },
    {
        title: 'Legumes Argentinos',
        description: 'Prato clássico',
        price: '89$',
        image:'https://img.freepik.com/fotos-gratis/tabua-de-madeira-cercada-por-pratos-de-massa-e-ingrediente-na-mesa_23-2148246798.jpg?w=2000'
    },
    {   
        title: 'Australian food',
        description: 'The best of Australia',
        price: '316$',
        image:'https://img.freepik.com/fotos-gratis/mesa-com-vista-de-cima-cheia-de-uma-variedade-de-comidas-deliciosas_23-2149141339.jpg?w=2000'
    },
];



const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
    },
    title:{
        fontSize:19,
        fontWeight:'800'
    }
    
})

export default function MenuItems() {
 return (
    <ScrollView showsVerticalScrollIndicator={false}>
     {foods.map((food,index) => (

    
    <View key={index}>
        <View style={styles.menuItemStyle}>
            <BouncyCheckbox iconStyle={{borderColor:"lightgray",borderRadius:0,
            
        }} fillColor ='green'/>
            <FoodInfo food={food} /> 
            <FoodImage food={food} />
        </View>
         <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20}}/>
        </View>
       
    ))}
    </ScrollView>
   
   
);
   
   
}


const FoodInfo = (props) => (
    <View style={{width:240,justifyContent:"space-evenly"}}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>

    </View>

)

const FoodImage = (props) => (
    <View>
        <Image source ={{uri:props.food.image}} style={{width:100,height:100,borderRadius:8}}/>
    </View>
)