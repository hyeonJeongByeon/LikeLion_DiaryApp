import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

class SearchTab extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>SearchTab</Text> 
            </View>
        );
    }
}
export default SearchTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})