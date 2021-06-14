import React, { Component } from "react";
import {View} from 'react-native'
import {NativeRouter, Route, Switch, Router, Redirect } from "react-router-native";

import Home from "./Containers/Home/Home";
import DatosScreen from ".//Containers/DatosScreen/DatosScreen";
import SubscibeScreen from './Containers/SubscibeScreen/SubscibeScreen';

export default function MessageRouteScreen(){
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/DatosScreen" component={DatosScreen}/>
          <Route exact path="/SubscribeScreen" component={SubscibeScreen}/>
          <Redirect to ="/"/>
        </Switch>
      </View>
    </NativeRouter>
  );
}