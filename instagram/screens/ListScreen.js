import React from 'react';
import { Text,View,FlatList,StyleSheet,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';

const {width,height} = Dimensions.get('window');

export default ListScreen = (props) => {
    return (
        <SafeAreaView>
            <CalendarPicker/>
            <ScrollView style = {styles.listContainer}>
                <FlatList
                    data = {props.screenProps.Posts.filter(data => {return data.date == props.screenProps.selectedDate})}
                    renderItem = {({item, index}) => {
                        return (
                            <TouchableOpacity
                                activeOpacity = {0.8}>
                                    <View style = {styles.itemContainer}>
                                        <Text style = {styles.title} numberOfLines = {1}>{item.title}</Text>
                                        <Text style = {styles.content} numberOfLines={1}>{item.content}</Text>
                                    </View>
                                </TouchableOpacity>
                        );
                    }}
                keyExtractor = {(_, index) => {return '${index}'}}/>
            </ScrollView>
        </SafeAreaView>
    )
}