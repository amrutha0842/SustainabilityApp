import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
                Home Screen
            </Text>
        </View>
        )
    }
}