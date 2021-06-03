import React, {useEffect, useState, useRef} from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const DropDownList = ({style, elements}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (

    <View>
      {
        elements.map((item, idx) => {
          return(
            <View style={style.container}>
              <Text>
                {item.label}
              </Text>
              <DropDownPicker
                key = {idx}

                open={item.openState}
                setOpen={item.handlerOpen}

                value={item.valueState}
                setValue={() => item.handlerValueState()}

                items={items}
                setItems={setItems}

                placeholder={"Seleccione una opción"}

                style={{zIndex:999}}

                //onChangeValue={item.handlerChangeValue}
              />
            </View>
          )
        })
      }
    </View>
  );
}