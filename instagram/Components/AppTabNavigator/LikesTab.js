import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

class LikesTab extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>LikesTab</Text> 
            </View>
        );
    }
}
export default LikesTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})