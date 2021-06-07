import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput , Platform} from 'react-native';
import Button from '../../Componentes/Button/Button';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {InputBox} from '../../Componentes/Input/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Card} from '../../Componentes/Card/Card';

import PropTypes from "prop-types";
import { withRouter } from "react-router";

//Actions
import { 
  DatosNodoSensorAction_ConsultarDatos
} from '../../Actions/DatosScreen_Action';


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

class DatosScreen extends React.Component {

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
    formFilter: [
      {
        name: 'ID_NODO_SENSOR',
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
        name: 'NOMBRE_VARIABLE',
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
        name: "FECHA_CREACION",
        label: 'Fecha Reporte',
        type: 'date',
        hours_24: false,
        valueState: new Date(),
        mode:'date',
        show: false,
        handlerValueState: (event, selectedDate) => {
          const currentDate = selectedDate; //|| Emt_state[2].valueState;
          let Emt_state = this.state.formFilter;
          Emt_state[2].valueState = currentDate;
          Emt_state[2].show = false;
          this.setState({formFilter: Emt_state});
          console.log(currentDate)
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
              Filtro de datos
            </Text>
          </View>

          <View style={{width: '100%', display:'flex', alignContent:'center'}}>
            
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
            
          </View>

          <Button
            label = {'Consultar Datos'}
            styleButton = {style_button_consultar}
            handleAction = {() => {

              let dataJsonObject = {}
                
              let newFormFilter = this.state.formFilter;
              
              let i = 0;
              newFormFilter.forEach(x => {
                  if(x.valueState !== ''){

                      let valor_cond = '';
                      if( x.name === 'FECHA_CREACION'){
                        let anio = x.valueState.getFullYear()
                        let mes = x.valueState.getMonth()+1
                        mes = mes.toString().padStart(2, '0')
                        let dia = x.valueState.getDate()
                        dia = dia.toString().padStart(2, '0')
                        valor_cond = `${anio}-${mes}-${dia}`
                        console.log(valor_cond)
                      }else if ( x.name !== 'FECHA_CREACION'){
                        valor_cond = x.valueState
                      }

                      dataJsonObject[`${x.name}`] = {
                          conector_logico: i === 0 ? '' : "AND",
                          operador: 'LIKE',
                          valor_condicion: `%${valor_cond}%`
                      }
                      i += 1;
                  }
              })
          
              DatosNodoSensorAction_ConsultarDatos(dataJsonObject)
                  .then(result => {
                      this.setState({data: result.data.map((a, indice) => ({ ...a, id: indice + 1 }))})
                      console.log(this.state.data)
                  }).catch((err) => {
                      alert('No existen conincidencias con las condiciones establecidas en los parámetros.')
                  })
            }}
          />

          <View>
            <Card
              style={style_card}
              elements={this.state.data}
            />
          </View>
                
        </View>
      </KeyboardAwareScrollView>
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
  container_scroll_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  }
});