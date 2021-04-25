import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as Font from 'expo-font';

export default class App extends React.Component {

  state = {
    fontLoaded: false
  };

  componentDidMount = async() => {
    try {
      await Font.loadAsync({
        Poppins_300Light,
        Poppins_500Medium,
        Poppins_700Bold,
      })
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading fonts', error);
    }
  }

  render(){

    if (!this.state.fontLoaded) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.rescityName}>ResCity Sensors</Text>
        <Text style={styles.resCityText}>Ciudadano, aquí podras consultar toda la información referentes a nuestros sensores</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // display:'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  resCityContainer: {
    marginTop:"5%",
    height: "20%",
    backgroundColor: "#000"
  },
  rescityName: {
    fontFamily: "Poppins_700Bold",
    color:"#3B3798",
    fontSize: 35  ,
    marginTop:"10%",
    marginLeft:"5%"
  },
  resCityText: {
    fontFamily: "Poppins_300Light",
    color: "#85929E",
    fontSize: 20,
    marginLeft:"5%"
  }
});