import React from "react";
import {
    StyleSheet, View, Text, StatusBar,} from "react-native

export default function Home (){
    return(
        <View style= {styles.container}>
            <StatusBar backgroundColor= 'dodgerblue' barStyle='dark-content'/>
            <Text>Welcome To home Screen</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center';

    }
})