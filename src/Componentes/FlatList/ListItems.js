import React, {useEffect, useState, useRef} from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing, Image} from 'react-native';
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ListItems (listItems) {

    const [fontLoaded] = useFonts({
      Poppins_500Medium,
    });
    
    // if (!fontLoaded) {
    //   return(
    //     <Text>
    //       Las fuentes no pueden ser cargadas
    //     </Text>
    //   )
    // }

    const translateX = useRef(new Animated.Value(Dimensions.get("window").height)).current 

    useEffect(()=>{
      Animated.timing(translateX,{toValue:0,duration:2000, useNativeDriver: true}).start();
    })

    const ItemView = ({ item }) => {
      return (
        <Animated.View key={item.id} style={{transform:[{translateY:translateX}], marginTop:10}}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.itemImg}
              source={item.img}
            />
            <Text style={styles.itemLabel} onPress={item.handleAction}>
                {item.label}
            </Text>
          </View>
        </Animated.View>
      );
    };

    return (
        <SafeAreaView style={styles.container}>
            {
              listItems.listItems.map((item, index) => {
                  return(
                    <ItemView key={index} item={item}/>
                  )
              })
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:"5%",
      marginRight: "5%",
      marginBottom: 10,
    },
    itemContainer:{
      height: 150,
      borderRadius: 10,
      backgroundColor:'#000',
      //zIndex:-1,
      display:'flex',
      justifyContent:'flex-end',
      alignContent:'flex-end',
    },
    itemImg: {
      position: 'absolute',
      borderRadius: 10,
      width: "100%",
      height: "100%",
      //zIndex:0
    },
    itemLabel: {
      width: "100%",
      height: 44,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:'rgba(0,0,0,0.3)',
      padding: 10,
      fontSize: 18,
      //zIndex:1,
      fontFamily:'Poppins_500Medium',
      color:"#FFF"
    },
});