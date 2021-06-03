import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput  } from 'react-native';
import Button from '../../Componentes/Button/Button';
import {DropDownList} from '../../Componentes/DropDownList/DropDownList';
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import DropDownPicker from 'react-native-dropdown-picker';

import PropTypes from "prop-types";
import { withRouter } from "react-router";


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
      color: "#7B13E4",
      fontSize: 15
  }
}
class DatosScreen extends React.Component {

  state = {
    text: ''
  }

  NodoSensorText = (data) => {
    console.log(data)
    this.setState({text: data})
  }

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


  render() {

    const { match, location, history } = this.props;
    return (
      <View style={styles.container}>

        <View style={{felex: 1, flexDirection: 'row'}}>
          <View  style={{width: "27%"}}>
            <Button
              styleButton = {style_button_return}
              handleAction = {() => {
                history.push("/")
              }}
            />
          </View>

          <View  style={{width: 300, display:'flex', justifyContent:'center'}}>
            <Text style={styles.titulo}>
              Tabla de datos
            </Text>
          </View>
        </View>

        <View style={{paddingTop: '10%', width: '100%', display:'flex', alignContent:'center'}}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={this.NodoSensorText}
              value={this.state.text}
            />
          </SafeAreaView>
        </View>

      </View>
    );
  }
}

export default withRouter(DatosScreen);

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
    marginLeft: 10,
    fontFamily: "Poppins_700Bold",
    color: "#2F43A6",
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});