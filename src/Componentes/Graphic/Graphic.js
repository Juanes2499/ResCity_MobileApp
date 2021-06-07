import React from 'react';
import {SafeAreaView, Text, View, TextInput } from 'react-native';
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_800Bold } from "@expo-google-fonts/poppins";
//import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { useFonts } from 'expo-font';


export const Graphic = ({style, elements}) => {
    const [fontLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_800Bold
    });

    return (
        <SafeAreaView>
            <View>
                <Text>
                    hola
                </Text>
            </View>
        </SafeAreaView>
    );
}