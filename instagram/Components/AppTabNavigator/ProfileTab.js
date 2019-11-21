import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

class ProfileTab extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>ProfileTab</Text> 
            </View>
        );
    }
}
export default ProfileTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})