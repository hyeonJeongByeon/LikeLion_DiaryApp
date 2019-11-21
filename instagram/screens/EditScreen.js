import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import EditHeader from '../components/EditHeader'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const {width, height} = Dimensions.get('window');

export default EditScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.contentContainer}>
                <View style = {styles.contentContainer}>
                    <View style = {styles.emptyBox}/>
                    <EditHeader
                        addPost = {props.screenProps.addPost}
                        selectPicture = {props.screenProps.selectPicture}/>
                    <View style = {styles.emptyBox}/>
                    {props.screenProps.imageUrl?<Image source = {{url: props.screenProps.imageUrl}} style = {{width:100, height: 100}}/> : null}
                    <TextInput
                        value = {props.screenProps.title}
                        placeholder="제목을 입력하세요 :)"
                        style = {styles.title}
                        returnKeyType = "done"
                        onChangeText = {props.screenProps.changeTitle}
                        />
                    <View style = {styles.emptyBox}/>
                    <TextInput
                        value = {props.screenProps.content}
                        placeholder = "본문!"
                        multiline = {true}
                        style = {style.content}
                        returnKeyType="done"
                        onChangeText = {props.screenProps.changeContent}/>
                </View>
            </View>
            <Text>EditScreen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    contentContainer: {
        width: width-50,
    },
    title: {
        fontSize: 40,
        paddingBottom: 12,
        borderBottomWidth: 2,
        borderBottomStartRadius: 1.5,
        borderBottomLeftRadius:1.5,
        borderBottomRightRadius:1.5,
        borderBottomEndRadius:1.5,
        borderBottomColor: '#7a7171'
    },
    content: {
        fontsize: 20,
    },
    emptyBox:{
        height: 20,
    }

})