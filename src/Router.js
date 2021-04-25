import React, { Component } from "react";
import {View} from 'react-native'
import {NativeRouter, Route, Switch, Router   } from "react-router-native";
import Home from "./Containers/Home/Home";

export default function MessageRouteScreen(){
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}