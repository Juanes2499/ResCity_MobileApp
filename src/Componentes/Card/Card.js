import React from 'react';
import {SafeAreaView, Text, View, TextInput } from 'react-native';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

import DateTimePicker from '@react-native-community/datetimepicker';

export const Card = ({style, elements}) => {
    const [fontLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    return (
        <SafeAreaView>
            <View>
                {
                    elements.map((item, idx) => {
                        return(
                            <View key={Math.random(0,100)} style={style.container}>
                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            ID Dato
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.ID_DATO} 
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            ID Nodo Sensor
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.ID_NODO_SENSOR}  
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            Nombre Variable
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.NOMBRE_VARIABLE}   
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            Valor
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.VALOR_DATO}    
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            Valor Notificado
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.VALOR_NOTIFICADO}  
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            Fecha Reporte
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.FECHA_CREACION}   
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "30%"}}>
                                        <Text>
                                            Hora Reporte
                                        </Text>
                                    </View>

                                    <View  style={{width: "70%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.HORA_CREACION}  
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    );
}