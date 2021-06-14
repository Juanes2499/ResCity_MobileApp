import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as Font from 'expo-font';
import image from '../../Imagenes/Analisis_datos.jpg'
import img_grafica from '../../Imagenes/grafica_datos.png'; 
import ContactUs from '../../Imagenes/ContactUs.jpg';

import PropTypes from "prop-types";
import { withRouter } from "react-router";

//Componentes
import ListItems from '../../Componentes/FlatList/ListItems';

class App extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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

    const { match, location, history } = this.props;

    if (!this.state.fontLoaded) {
      return <ActivityIndicator />
    }

    const itemsArray = [
      { 
        id: '1', 
        label: 'Tabla de datos', 
        img: image,
        handleAction: () =>{
          history.push("/DatosScreen")
        }
      },
      { 
        id: '2', 
        label: 'Suscribirme', 
        img: img_grafica,
        handleAction: () =>{
          history.push("/SubscribeScreen")
        }
      },
      { 
        id: '3', 
        label: 'Contactenos', 
        img: ContactUs,
        handleAction: () =>{
          history.push("/ContactScreen")
        }
      },
    ]
  

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.rescityName}>ResCity Sensors</Text>
        <Text style={styles.resCityText}>Ciudadano, aquí podras consultar toda la información referentes a nuestros sensores</Text>
        <ListItems listItems={itemsArray}/>
      </View>
    )
  }
}

export default withRouter(App)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%'
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