import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput , Platform} from 'react-native';
import Button from '../../Componentes/Button/Button';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {InputBox} from '../../Componentes/Input/Input';
import {Graphic} from '../../Componentes/Graphic/Graphic';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import { withRouter } from "react-router";

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

class SubscibeScreen extends React.Component {

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
    text: '',
    data: [],
    formNew: [
      {
        name: 'NOMBRES',
        label: 'Nombres',
        type: 'input',
        valueState: '',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formNew;
          Emt_state[0].valueState = data;
          this.setState({formNew: Emt_state});
          console.log(data)
        }
      },
      {
        name: 'APELLIDOS',
        label: 'Apellidos',
        valueState: '',
        type: 'input',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formNew;
          Emt_state[1].valueState = data;
          this.setState({formNew: Emt_state});
          console.log(data)
        }
      },
      {
        name: "EDAD",
        label: 'Edad',
        type: 'input',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formNew;
          Emt_state[2].valueState = data;
          this.setState({formNew: Emt_state});
          console.log(data)
        }
      },
      {
        name: "NUM_TELEFONO",
        label: 'Número de Celular',
        type: 'input',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formNew;
          Emt_state[3].valueState = data;
          this.setState({formNew: Emt_state});
          console.log(data)
        }
      },
      {
        name: "EMAIL",
        label: 'Email',
        type: 'input',
        handlerValueState: (data) =>{
          let Emt_state = this.state.formNew;
          Emt_state[4].valueState = data;
          this.setState({formNew: Emt_state});
          console.log(data)
        }
      },
    ]
  }

  later(delay) {
      return new Promise(function(resolve) {
          setTimeout(resolve, delay);
    });
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
              Datos Personales
            </Text>
          </View>

          <View style={{width: '100%', display:'flex', alignContent:'center'}}>
              <InputBox
                style={style_input_box}
                elements={this.state.formNew}
              />
          </View>

          <Button
            label = {'Suscribirse'}
            styleButton = {style_button_consultar}
            handleAction = {() => {

              let dataJsonObject = {}
                
              let newformNew = this.state.formNew;
              
              let nullFields = [];

              newformNew.forEach(x => {
                if (x.valueState === ''){
                  nullFields.push(x.label)
                }else{
                  dataJsonObject[`${x.name.toLowerCase()}`] = x.valueState
                }
              })
          
              SubscribeScreenAction_Subscribe(dataJsonObject)
                  .then(result => {
                      if(result){
                        alert('Usuario registrado')
                      }
                  }).catch((err) => {
                      alert('No se ha podido registrar el usuario')
                  })
            }}
          />           
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default withRouter(SubscibeScreen);

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
  }
});