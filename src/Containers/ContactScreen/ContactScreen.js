import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput , Platform} from 'react-native';
import Button from '../../Componentes/Button/Button';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {InputBox} from '../../Componentes/Input/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import { withRouter } from "react-router";

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

//Actions
import { 
  SubscribeScreenAction_Subscribe
} from '../../Actions/SubscribeScreen_Action'


const style_button_return = {
  shape_button: {
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      borderRadius: 10,
      backgroundColor: "#E1E3E3",
      paddingLeft: "2%",
      paddingRight: "2%",
      paddingTop: "2%",
      paddingBottom: "2%"
  },
  label_button: {
      fontFamily: 'Poppins_500Medium',
      color: "#2F43A6",
      fontSize: 15
  }
}

const style_input_box = {
  container:{
    marginTop:'5%',
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: '#13257D'
  },
  input: {
    marginTop:'2%',
    borderRadius: 10,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#67686D',
    fontSize: 17,
    color: '#535871'
  }
}

const style_button_date = {
  shape_button: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#E1E3E3",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "2%",
    paddingBottom: "2%"
  },
  label_button: {
      fontFamily: 'Poppins_500Medium',
      color: "#2F43A6",
      fontSize: 15
  }
}

const style_button_consultar = {
  shape_button: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#32EC7C",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
    marginTop: '10%'
  },
  label_button: {
      fontFamily: 'Poppins_500Medium',
      color: "#F2F2F2",
      fontSize: 15
  },
}

const style_card = {
  container: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#2F43A6',
    marginTop:'10%',
    padding:5
  },
  key: {
    fontFamily: 'Poppins_500Medium',
    color: "#2F43A6",
    fontSize: 12
  },
  value: {
    fontFamily: 'Poppins_300Light',
    color: "#040555",
    fontSize: 12
  }
}

class ContactScreen extends React.Component {

  componentDidMount = async() => {

    try {
      await Font.loadAsync({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
      })
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading fonts', error);
    }
  }

  state = {
    markers: [
        {
            title:'Universidad Autónoma de Occidente de Cali',
            LatLng: {
                latitude: 3.35365,
                longitude: -76.52304,
            },
            description: 'Sede principal, oficina 32 Piso 2'
        }
    ],
  }

  onRegionChange(region) {
    this.setState({ region });
  }


  render() {

    const { match, location, history } = this.props;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>      

            <View  style={{width: "27%"}}>
                <Button
                    label = {'Regresar'}
                    styleButton = {style_button_return}
                    handleAction = {() => {
                        history.push("/")
                    }}
                />
            </View>

            <View  style={{width: "100%"}}>
                <Text style={styles.titulo}>
                    Contáctenos
                </Text>
            </View>

            <View style={{width: '100%', display:'flex', alignContent:'center', height:'60%'}}>
                <MapView
                    initialRegion={{
                        latitude: 3.35365,
                        longitude: -76.52304,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={{height:300, width:'100%'}}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    minZoomLevel={15}

                >
                    {this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.LatLng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View> 

            <View>
                <Text style={styles.resCityText}>Ciudadano, nos puede encontrar en la Cll 25 # 115-85 Km 2 (Cali - Colombia) en la oficina 32 Piso 2 o nos puede llamar al 032 318 8000.</Text>
            </View>

        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default withRouter(ContactScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  titulo: {
    marginTop:'5%',
    fontFamily: "Poppins_700Bold",
    color: "#2F43A6",
    fontSize: 35,
  },
  container_scroll_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  resCityText: {
    fontFamily: "Poppins_300Light",
    color: "#85929E",
    fontSize: 15,
    marginTop: '5%'
  }
});