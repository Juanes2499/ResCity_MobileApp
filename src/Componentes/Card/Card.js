import React from 'react';
import {SafeAreaView, Text, View, TextInput } from 'react-native';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_800Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

import DateTimePicker from '@react-native-community/datetimepicker';

export const Card = ({style, elements}) => {
    const [fontLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_800Bold
    });

    return (
        <SafeAreaView>
            <View>
                {
                    elements.map((item, idx) => {
                        return(
                            <View key={Math.random(0,100)} style={style.container}>
                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            ID Dato
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.ID_DATO} 
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            ID Nodo
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.ID_NODO_SENSOR}  
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            Variable 
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.NOMBRE_VARIABLE}   
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            Valor
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.VALOR_DATO}    
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            Notificado
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.VALOR_NOTIFICADO}  
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            Fecha 
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
                                        <Text style={style.value}>
                                            {item.FECHA_CREACION}   
                                        </Text>
                                    </View>
                                </View>

                                <View style={{felex: 1, flexDirection: 'row'}}>
                                    <View  style={{width: "20%"}}>
                                        <Text style={style.key}>
                                            Hora
                                        </Text>
                                    </View>

                                    <View  style={{width: "80%", display:'flex', justifyContent:'center'}}>
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