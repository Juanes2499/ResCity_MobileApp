import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput , Platform} from 'react-native';
import Button from '../../Componentes/Button/Button';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {InputBox} from '../../Componentes/Input/Input';

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
    fontFamily:'Poppins_400Regular',
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

class DatosScreen extends React.Component {

  state = {
    text: '',
    formFilter: [
      {
        label: 'ID Nodo Sensor',
        type: 'input',
        valueState: '',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formFilter;
          Emt_state[0].valueState = data;
          this.setState({formFilter: Emt_state});
          console.log(data)
        }
      },
      {
        label: 'Variable Nodo Sensor',
        valueState: '',
        type: 'input',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formFilter;
          Emt_state[1].valueState = data;
          this.setState({formFilter: Emt_state});
          console.log(data)
        }
      },
      {
        label: 'Fecha Reporte',
        type: 'date',
        hours_24: false,
        valueState: new Date(1598051730000),
        mode:'date',
        // handlerValueState: (data) =>{
        //   let Emt_state = this.state.formFilter;
        //   Emt_state[2].valueState = data;
        //   this.setState({formFilter: Emt_state});
        //   console.log(data)
        // }
        show: false,
        handlerValueState: (event, selectedDate) => {
          const currentDate = selectedDate || Emt_state[2].valueState;
          let Emt_state = this.state.formFilter;
          Emt_state[2].valueState = currentDate;
          Emt_state[2].show = false;
          this.setState({formFilter: Emt_state});
          console.log(currentDate)
        }

      },
    ]
  }

  NodoSensorText = (data) => {
    console.log(data)
    this.setState({text: data})
  }

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


  render() {

    const { match, location, history } = this.props;
    return (
      <View style={styles.container}>

        {/* <View style={{felex: 1, flexDirection: 'row'}}>
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
        </View> */}

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
            Filtro de datos
          </Text>
        </View>

        <View style={{width: '100%', display:'flex', alignContent:'center'}}>
          <SafeAreaView>
            <InputBox
              style={style_input_box}
              elements={this.state.formFilter}
            />
            <Button
              label = {'Seleccionar Fecha'}
              styleButton = {style_button_date}
              handleAction = {() => {
                let Emt_state = this.state.formFilter;
                Emt_state[2].show = true;
                this.setState({formFilter: Emt_state});
              }}
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
    marginTop:'5%',
    fontFamily: "Poppins_700Bold",
    color: "#2F43A6",
    fontSize: 35,

  },
});