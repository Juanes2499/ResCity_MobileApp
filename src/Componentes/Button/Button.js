import React, {useEffect, useState, useRef} from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Poppins_200ExtraLight, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Button ({label, styleButton, handleAction}) {

    const [fontLoaded] = useFonts({
      Poppins_500Medium,
      Poppins_200ExtraLight
    });

    return (
        <View>
            <TouchableOpacity
                onPress={handleAction}
                style={styleButton.shape_button}>
                <Text style={styleButton.label_button}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}