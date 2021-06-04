import React from 'react';
import {SafeAreaView, Text, View, TextInput } from 'react-native';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

import DateTimePicker from '@react-native-community/datetimepicker';

export const InputBox = ({style, elements}) => {
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

                    if(item.type === 'input'){
                        return(
                            <View key={Math.random(0,100)} style={style.container}>
                                <Text
                                    key={Math.random(0,100)}
                                    style={style.label}
                                >
                                    {item.label}
                                </Text>
                                <TextInput
                                    key={idx}
                                    style={style.input}
                                    onChangeText={item.handlerValueState}
                                    value={item.valueState}
                                />
                            </View>
                        )
                    }else if(item.type === 'date'){
                        return(
                            <View key={Math.random(0,100)} style={style.container}>
                                <Text
                                    key={Math.random(0,100)}
                                    style={style.label}
                                >
                                    {item.label}
                                </Text>
                                {item.show && <DateTimePicker
                                    testID="dateTimePicker"
                                    value={item.valueState}
                                    mode={item.mode}
                                    is24Hour={item.hours_24}
                                    display="default"
                                    onChange={item.handlerValueState}
                                />}
                            </View>
                        )
                    }
                })
            }
            </View>
        </SafeAreaView>
    );
}